<?php
session_start();

header('Access-Control-Allow-Origin: https://anpna.dz');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

$host = 'localhost';
$dbname = 'anpnadz2_test';     
$username = 'salim';           
$password = 'e@SfETKx4sNdqrA';

$current_time = time();
$ip_address = $_SERVER['REMOTE_ADDR'];

if (isset($_SESSION['last_submit_time'])) {
    $time_diff = $current_time - $_SESSION['last_submit_time'];
    if ($time_diff < 60) {
        http_response_code(429);
        echo json_encode([
            'success' => false, 
            'message' => 'Veuillez attendre ' . (60 - $time_diff) . ' secondes'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
}

if (!isset($_SESSION['submit_count'])) {
    $_SESSION['submit_count'] = 0;
    $_SESSION['submit_window_start'] = $current_time;
}

if ($current_time - $_SESSION['submit_window_start'] > 3600) {
    $_SESSION['submit_count'] = 0;
    $_SESSION['submit_window_start'] = $current_time;
}

$_SESSION['submit_count']++;
if ($_SESSION['submit_count'] > 5) {
    http_response_code(429);
    echo json_encode([
        'success' => false, 
        'message' => 'Trop de tentatives'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée'], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    
    // Modification pour gérer FormData (pas de json_decode)
    $data = $_POST;
    
    if (!empty($data['website'])) {
        error_log("Bot détecté: " . $ip_address);
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Demande enregistrée'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    
    $prenom = trim($data['prenom'] ?? '');
    $nom = trim($data['nom'] ?? '');
    $email = trim($data['email'] ?? '');
    $telephone = trim($data['telephone'] ?? '');
    $entreprise = trim($data['entreprise'] ?? '');
    $fonction = trim($data['fonction'] ?? '');
    $message = trim($data['message'] ?? '');
    
    if (empty($prenom) || empty($nom) || empty($email)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Champs manquants'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Email invalide'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Gestion des fichiers
    // Création d'un dossier unique par demande : uploads/Nom_Prenom_Timestamp_Uniqid
    $safeNom = preg_replace('/[^a-zA-Z0-9]/', '', $nom);
    $safePrenom = preg_replace('/[^a-zA-Z0-9]/', '', $prenom);
    $folderName = strtoupper($safeNom) . '_' . ucfirst(strtolower($safePrenom)) . '_' . date('Ymd_His');
    
    $uploadDir = 'uploads/' . $folderName . '/';
    
    if (!file_exists($uploadDir)) {
        if (!mkdir($uploadDir, 0755, true)) {
            throw new Exception("Erreur lors de la création du dossier de stockage");
        }
    }

    $uploadedFilesInfo = [];
    $allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    $maxFileSize = 5 * 1024 * 1024; // 5MB

    $requiredDocuments = ['birthCertificate', 'residenceCertificate', 'workCertificate'];
    $docLabels = [
        'birthCertificate' => 'Extrait de naissance',
        'residenceCertificate' => 'Certificat de résidence',
        'workCertificate' => 'Attestation de travail'
    ];

    foreach ($requiredDocuments as $docName) {
        if (isset($_FILES[$docName]) && $_FILES[$docName]['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES[$docName];
            
            // Validation Type
            if (!in_array($file['type'], $allowedTypes)) {
                throw new Exception("Type de fichier non autorisé pour " . $docLabels[$docName]);
            }

            // Validation Taille
            if ($file['size'] > $maxFileSize) {
                throw new Exception("Fichier trop volumineux pour " . $docLabels[$docName]);
            }

            // Nom de fichier sécurisé
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $filename = uniqid() . '_' . $docName . '.' . $extension;
            $targetPath = $uploadDir . $filename;

            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                $uploadedFilesInfo[] = $docLabels[$docName] . ": " . $targetPath;
            } else {
                throw new Exception("Erreur lors de l'upload de " . $docLabels[$docName]);
            }
        } else {
             // Vérification stricte des fichiers requis
             throw new Exception("Document manquant : " . $docLabels[$docName]);
        }
    }
    
    // Ajout des infos fichiers au message pour stockage BDD (solution temporaire sans modif schéma)
    $messageWithFiles = $message . "\n\n--- Documents Joints ---\n" . implode("\n", $uploadedFilesInfo);

    $prenom = htmlspecialchars($prenom, ENT_QUOTES, 'UTF-8');
    $nom = htmlspecialchars($nom, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $telephone = htmlspecialchars($telephone, ENT_QUOTES, 'UTF-8');
    $entreprise = htmlspecialchars($entreprise, ENT_QUOTES, 'UTF-8');
    $fonction = htmlspecialchars($fonction, ENT_QUOTES, 'UTF-8');
    $messageSafe = htmlspecialchars($messageWithFiles, ENT_QUOTES, 'UTF-8');
    
    $sql = "INSERT INTO demandes_contact 
            (prenom, nom, email, telephone, entreprise, fonction, message, ip_address) 
            VALUES (:prenom, :nom, :email, :telephone, :entreprise, :fonction, :message, :ip_address)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':prenom' => $prenom,
        ':nom' => $nom,
        ':email' => $email,
        ':telephone' => $telephone,
        ':entreprise' => $entreprise,
        ':fonction' => $fonction,
        ':message' => $messageSafe,
        ':ip_address' => $ip_address
    ]);
    
    $_SESSION['last_submit_time'] = $current_time;
    
    // ENVOI EMAIL
    $to = "contact@anpna.dz";
    $subject = "Demande Adhésion - $prenom $nom";
    $body = "Nouvelle demande d'adhésion:\n\nNom: $prenom $nom\nEmail: $email\nTel: $telephone\nEntreprise: $entreprise\nFonction: $fonction\nMessage: $message\n\nDocuments:\n" . implode("\n", $uploadedFilesInfo);
    $headers = "From: noreply@anpna.dz\r\n";
    
    @mail($to, $subject, $body, $headers);
    
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Demande enregistrée avec succès !'
    ], JSON_UNESCAPED_UNICODE);
    
} catch(PDOException $e) {
    error_log("Erreur BDD: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur BDD'], JSON_UNESCAPED_UNICODE);
} catch(Exception $e) {
    error_log("Erreur: " . $e->getMessage());
    http_response_code(400); // Bad request pour les erreurs de validation
    echo json_encode(['success' => false, 'message' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
?>
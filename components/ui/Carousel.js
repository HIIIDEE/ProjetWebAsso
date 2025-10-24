"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({
  items = [],
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = false,
  autoPlayInterval = 6000,
  showControls = true,
  showIndicators = true,
  spaceBetween = 32,
  className = "",
  children
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`relative carousel-container ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={itemsPerView.mobile}
        navigation={showControls ? {
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        } : false}
        pagination={showIndicators ? {
          clickable: true,
          el: '.swiper-pagination-custom',
        } : false}
        autoplay={autoPlay ? {
          delay: autoPlayInterval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        } : false}
        breakpoints={{
          640: {
            slidesPerView: itemsPerView.mobile,
            spaceBetween: spaceBetween * 0.75,
          },
          768: {
            slidesPerView: itemsPerView.tablet,
            spaceBetween: spaceBetween * 0.875,
          },
          1024: {
            slidesPerView: itemsPerView.desktop,
            spaceBetween: spaceBetween,
          },
        }}
        loop={items.length > itemsPerView.desktop}
        grabCursor={true}
        className="!pb-16"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index} className="h-auto">
            <div className="h-full">
              {children ? children(item) : item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Hidden on mobile */}
      {showControls && items.length > itemsPerView.desktop && (
        <>
          <button
            className="swiper-button-prev-custom hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 bg-white shadow-xl rounded-full p-3 md:p-4 hover:bg-gray-50 transition-all duration-300 border group z-10 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary transition-colors" />
          </button>

          <button
            className="swiper-button-next-custom hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 bg-white shadow-xl rounded-full p-3 md:p-4 hover:bg-gray-50 transition-all duration-300 border group z-10 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary transition-colors" />
          </button>
        </>
      )}

      {/* Custom Pagination */}
      {showIndicators && (
        <div className="swiper-pagination-custom mt-8 flex justify-center"></div>
      )}

      <style jsx global>{`
        .carousel-container .swiper-pagination-custom {
          position: relative;
          bottom: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .carousel-container .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .carousel-container .swiper-pagination-bullet:hover {
          background: #9ca3af;
        }

        .carousel-container .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: var(--primary-color, #3b82f6);
        }

        .carousel-container .swiper-slide {
          height: auto;
          display: flex;
        }

        .carousel-container .swiper-slide > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
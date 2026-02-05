import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Loop } from "swiper/modules";

// Styles obrigatórios
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductSlider() {
  // Esse state vai guardar a instância do slider de miniaturas
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* --- Slider Principal --- */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-xl mb-4 border border-slate-200"
      >
        <SwiperSlide>
          <img src="oculos-frontal.jpg" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="oculos-lateral.jpg" className="w-full object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* --- Slider de Miniaturas (Thumbs) --- */}
      <Swiper
        onSwiper={setThumbsSwiper} // Aqui a mágica acontece
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-slider"
      >
        <SwiperSlide className="cursor-pointer opacity-50 transition-opacity swiper-slide-thumb-active:opacity-100">
          <img
            src="oculos-frontal.jpg"
            className="rounded-md border-2 border-transparent"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer opacity-50">
          <img src="oculos-lateral.jpg" className="rounded-md" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

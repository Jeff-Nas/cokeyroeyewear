import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Styles obrigatórios
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function ProductSlider({ gallery = [] }) {
  // state para guardar a instância do slider de miniaturas
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* --- Slider Principal --- */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        // breakpoints={{
        //   768: {
        //     navigation: true,
        //   },
        // }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-xl mb-4 border border-slate-200 my-gallery-slider"
      >
        {gallery.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} className="w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Slider de Miniaturas (Thumbs) --- */}
      <Swiper
        onSwiper={setThumbsSwiper} // setando o thumb ativo - objeto swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-slider"
      >
        {gallery.map((image) => (
          <SwiperSlide
            key={image}
            className="cursor-pointer opacity-80 transition-opacity swiper-slide-thumb-active:opacity-100"
          >
            <img
              src={image}
              className="rounded-md border-2 border-transparent"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Mousewheel } from "swiper/modules";

// Styles obrigatórios
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/mousewheel";

export function ProductSlider({ gallery = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  console.log(imageIndex);

  return (
    // 1. Layout: Mobile (coluna) | Desktop (linha invertida para thumbs  na esquerda)
    <div className="max-w-2xl mx-auto p-4 flex flex-col md:flex-row-reverse gap-4">
      {/* --- Slider Principal --- */}
      {/* flex-1 garante que ele ocupe o espaço restante. min-w-0 para evitar bugs do flexbox */}
      <div className="flex-1 w-full min-w-0">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="rounded-xl w-full"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={`slider-${index}`}>
              <img
                src={image}
                className="w-full h-auto object-cover"
                alt="Produto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- Slider de MINIATURAS (Thumbs) --- */}

      <div className="w-full h-24 md:w-24 md:h-full shrink-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          mousewheel={true}
          modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
          className="thumbs-slider w-full h-full"
          breakpoints={{
            // Mobile: Horizontal
            0: {
              direction: "horizontal",
              slidesPerView: 4,
            },
            // Desktop: Vertical
            768: {
              direction: "vertical",
              slidesPerView: "auto", // Importante: auto para respeitar a altura do container
            },
          }}
        >
          {gallery.map((image, index) => (
            <SwiperSlide
              // Define altura fixa para o slide thumb no desktop para não esticar
              key={`thumb-${index}`}
              onClick={() => setImageIndex(index)}
              className={`cursor-pointer  hover:opacity-100 transition-opacity h-20! w-20! md:w-full! md:h-24! ${index == imageIndex ? "backdrop-sepia" : "opacity-80"}`}
            >
              <img
                src={image}
                className="w-full h-full object-cover rounded-md"
                alt="Thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

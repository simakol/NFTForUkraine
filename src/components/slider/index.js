import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { useEffect, useState } from "react";

import "swiper/css";
import "./index.sass";

export default function Slider({ images, reverseDirection }) {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setSlidesPerView = (pageWidth) => {
    if (pageWidth <= 650) {
      return 2;
    }
    if (pageWidth > 650 && pageWidth < 750) {
      return 3;
    }
    if (pageWidth >= 750 && pageWidth < 1000) {
      return 4;
    }
    if (pageWidth >= 1000 && pageWidth < 1200) {
      return 5;
    }
    if (pageWidth >= 1200 && pageWidth < 1700) {
      return 6;
    }
    if (pageWidth >= 1700 && pageWidth < 2100) {
      return 8;
    }
    if (pageWidth >= 2100 && pageWidth < 2700) {
      return 10;
    }
    if (pageWidth >= 2700) {
      return 11;
    }
    return 5;
  };

  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={pageWidth < 599 ? 0 : -150}
      slidesPerView={setSlidesPerView(pageWidth)}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection,
      }}
      speed={1300}
      allowTouchMove={false}>
      <div>
        {images?.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="slider-image"
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

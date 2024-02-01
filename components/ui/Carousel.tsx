import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={images.length > 1}
      loop={true}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className="carousel-swiper"
    >
      {images?.map((num) => (
        <SwiperSlide key={num}>
          <Image src={num} alt="carousel" height={768} width={1366} priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

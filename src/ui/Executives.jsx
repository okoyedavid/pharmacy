import { images } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import styles from "../modules/Executives.module.css";

function Executives() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Executives of faculty of pharmaceutical sciences
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={styles.swiper}
      >
        {images.map((item) => (
          <SwiperSlide key={item.name} className={styles.slide}>
            <img src={item.url} alt={item.name} className={styles.image} />
            <h4>{item.role}</h4>
            <h3>{item.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Executives;

import { fetchConstantValue } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import styles from "../modules/Executives.module.css";

function Executives() {
  const images = fetchConstantValue("images");
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Executives of faculty of pharmaceutical sciences
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={styles.swiper}
      >
        {images.map((item) => (
          <SwiperSlide key={item.name} className={styles.slide}>
            <div>
              {" "}
              <img src={item.url} alt={item.name} className={styles.image} />
              <h4>{item.role}</h4>
              <h3>{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Executives;

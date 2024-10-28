import { images } from "../utils/constants";
import styles from "../modules/Executives.module.css";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";

function Executives() {
  const [active, setActive] = useState(5);
  const MAX_VISIBILITY = 3;
  const handleNext = () => {
    setActive((i) => (i + 1) % count);
  };

  const handlePrev = () => {
    setActive((i) => (i - 1 + count) % count);
  };

  const count = images.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft" && active > 0) {
        setActive((i) => i - 1);
      } else if (e.key === "ArrowRight" && active < count - 1) {
        setActive((i) => i + 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [active, count]);

  return (
    <div className={styles.container}>
      <h1> Meet your excos</h1>
      <div className="carousel" ref={carouselRef}>
        <button
          disabled={active === 0}
          className="nav left"
          onClick={handlePrev}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>

        {images.map((item, i) => (
          <div
            key={i}
            className={styles.cardContainer}
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
              "--card-bg":
                i === active
                  ? "#ffffff"
                  : `hsl(199deg, 98%, calc(50% + var(--abs-offset) * 20%))`,
            }}
          >
            <div key={item.name} className={styles.card}>
              <h2>{item.name}</h2>
              <p>{item.role}</p>
              <img src={item.url} className={styles.image} />
            </div>
          </div>
        ))}

        <button
          disabled={active === count - 1}
          className="nav right"
          onClick={handleNext}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Executives;

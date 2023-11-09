import React, { useState, useEffect ,useRef} from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import styles from "./SlideShow.module.css";

const images = [
  {
    image:
      "https://banooara.com/images/thumbs/0004704_nokat-kharid-lavazem-arayeshi_935.jpeg",
  },
  {
    image: "http://mbanews.ir/uploads/posts/2021-05/1622319141_1-1.jpg",
  },
  {
    image:
      "https://www.didnegar.com/wp-content/uploads/2021/10/Untitled-1-1.png",
  },
  {
    image:
      "https://www.moeinmedia.com/wp-content/uploads/2022/09/%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8-%D8%B1%D9%88%D8%B4-%D8%B9%DA%A9%D8%A7%D8%B3%DB%8C.jpg",
  },
  {
    image:
      "https://aradbranding.com/fa/uploads/topics/mceu_2356106921677070154061.jpg",
  },
];
const delay = 3000;
const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const rightHandle = () => {
    setIndex(index === images.lenth - 1 ? 0 : index + 1);
  };
  const leftHandle = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <div
          className={styles.slideShowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((current, index) => (
            <img key={index} src={current.image} className={styles.slide}></img>
          ))}
        </div>
      </div>
      <div>
        <button className={styles.left} onClick={leftHandle}><FaAngleLeft className={styles.icon}/></button>
        <button className={styles.right} onClick={rightHandle}><FaAngleRight className={styles.icon}/></button>
      </div>
    </div>
    </>
  );
};

export default SlideShow;

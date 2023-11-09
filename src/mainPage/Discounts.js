import React from "react";
import styles from "./Discounts.module.css";
import { FaAngleRight } from "react-icons/fa";
const discountProducts = [
  {
    image:
      "https://static2.khabarfoori.com/servev2/N2Y3YzgerHrc/5Uwvb7W7Zm0,/file.jpg",
      price:50
  },
  {
    image:
      "https://digijanebi.com/uploads/products/8afe54.jpg?m=thumb&w=1280&h=800&q=high",
      price:66
  },
  {
    image: "https://avidgallery.ir/wp-content/uploads/2021/11/gerhmooi-01.jpg",
    price:24
  },
  { image: "https://pic.photo-aks.com/large/sport_shoes_orange.jpg",
   price:33
   },
 
  {
    image:
      "https://farhangst.ir/wp-content/uploads/2020/07/PicsArt_07-19-11.15.07.jpg",
      price:15
  },
  {
    image:
      "https://riboon.com/wp-content/uploads/2022/11/00503002-1.jpg",
      price:27
  },
  {
    image: "https://www.pirakade.ir/media/7722/content/16-ultimate.jpg",
    price:40
  },
  {
    image:
      "https://www.jowhareh.com/images/Jowhareh/galleries/poster_75d7adaf-858f-410f-9a3e-aca26c28f710.jpeg",
      price:42
  },
];

const Discounts = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headAndImg}>
          <h3 className={styles.text}>Discount Products</h3>
          <img
            src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
            alt="discount"
            className={styles.box}
          />
        </div>
        <div className={styles.pictures}>
          {discountProducts.map((current, index) => (
            <div key={index}>
              <img src={current.image} className={styles.picture}></img>
              <div className={styles.numbers}>
              <span className={styles.price}>{current.price}$</span>
              <span className={styles.discount}>{current.price-12}%</span>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.moreButt}> <FaAngleRight className={styles.icon} /></button>
      </div>
    </div>
  );
};

export default Discounts;

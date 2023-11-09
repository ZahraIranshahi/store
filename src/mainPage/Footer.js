import React from "react";
import { BsHeadset } from "react-icons/bs";
import styles from "./Footer.module.css";

const icons = [
  {
    icon: "https://www.digikala.com/statics/img/svg/footer/express-delivery.svg",
    id: 0,
    name: "Express Delivery",
  },
  {
    icon: "https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg",
    id: 1,
    name: "Cash on Delivery",
  },
  {
    icon: "https://www.digikala.com/statics/img/svg/footer/support.svg",
    id: 2,
    name: "Support",
  },
  {
    icon: "https://www.digikala.com/statics/img/svg/footer/days-return.svg",
    id: 3,
    name: "Days Return",
  },
  {
    icon: "https://www.digikala.com/statics/img/svg/footer/original-products.svg",
    id: 4,
    name: "Original Products",
  },
];

const texts = [
  {
    title: "DigiKala",
    items: [
      "About DigiKala",
      "Contact DigiKala",
      "Job Offers",
      "DigiKala News",
    ],
    id: 0,
  },
  {
    title: "Customer Services",
    items: ["FAQ", "Terms of Use", "Privacy", "Report a Problem"],
    id: 1,
  },
  {
    title: "Buying Guide",
    items: ["How to Place Order", "Payment Methods"],
    id: 2,
  },
];
const Footer = () => {
  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.iconButt}>
        <button onClick={topHandler} className={styles.button}>
          Back to Top
        </button>
        <img
          src="https://www.digikala.com/statics/img/svg/digi.svg"
          className={styles.img}
        ></img>
      </div>
      <div className={styles.icons}>
        {icons.map((item) => (
          <div key={item.id} className={styles.icon}>
            <img src={item.icon}></img>
            <span> {item.name} </span>
          </div>
        ))}
      </div>
      <div className={styles.texts}>
        {texts.map((item) => (
          <div className={styles.text} key={item.id}>
            <h3>{item.title}</h3>
            {item.items.map((oneItem) => (
              <span className={styles.oneItem} key={oneItem.length}>
                {oneItem}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <h3>DigiKala Mag</h3>
        <h3>Digi Pay</h3>
        <h3>Digi Style</h3>
        <h3>Digi Plus</h3>
        <h3>Digi Club</h3>
        <h3>DigiKala Jet</h3>
        <h3>Magnet</h3>
      </div>
      <BsHeadset className={styles.headphone}/>
    </div>
  );
};

export default Footer;

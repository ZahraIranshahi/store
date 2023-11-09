import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { cardContext } from "../contextProvider/AddItemContextProvider";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { state } = useContext(cardContext);
  return (
    <>
      {" "}
      <Link to="/shopcart" className={styles.container}>
        {" "}
        <div className={styles.cart}>
          <FiShoppingCart size={42} className={styles.cartIcon} />
          <span className={styles.cartItemQuantity}>
            {state.totalItems}{" "}
          </span>{" "}
        </div>
      </Link>{" "}
    </>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartProduct from "../productscomponent/CartProduct";
import { cardContext } from "../contextProvider/AddItemContextProvider";
import styles from "./ShopCart.module.css";
const ShopCart = () => {
  const { state, dispatch } = useContext(cardContext);
  return (
    <>
      {state.totalItems === 0 && !state.checkout && (
        <div className={styles.container}>
          <h3 className={styles.noProduct}>No Product Found!</h3>
          <Link to="/">
            <button className={styles.back}>Back To Shop</button>
          </Link>
        </div>
      )}
      {state.totalItems !== 0 &&
        state.selectedItems.map((item) => (
          <CartProduct key={item.id} data={item} />
        ))}
      {state.totalItems !== 0 && (
        <div className={styles.totalInfo}>
          <div>
            <h4 className={styles.totalItem}>
              <span>Total Items : </span>
              {state.totalItems}
            </h4>
            <h4 className={styles.totalPayments}>
              <span>Total Payments : </span>
              {state.totalPrice}
            </h4>
          </div>
          <div>
            <div>
            <button className={styles.checkOutButton} onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check Out
            </button>
            <Link to="/">
              <button className={styles.shoppnigButton}>Back to Shopping</button>{" "}
            </Link>
            </div>
            <button className={styles.clearButton}  onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.checkedOut}>
          <h3>Checked Out Successfully</h3>
          <Link to="/">
            <button className={styles.buyMore} onClick={() => dispatch({ type: "CLEAR" })}>
              Buy More
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ShopCart;

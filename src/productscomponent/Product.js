import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { cutTitle, findItem, itemsCounter } from "../helper/functions";
import { Link } from "react-router-dom";
import { cardContext } from "../contextProvider/AddItemContextProvider";
import styles from "./Product.module.css"

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cardContext);
  return (
    
    <div className={styles.container}>
      <div>
      <img src={productData.image} alt="product" />
      <div className={styles.TitlePrice}>
      <h3>{cutTitle(productData.title)}</h3>
      <p>{productData.price} $</p>
      </div>
      <div className={styles.detailButton}>
        <Link to={`/products/${productData.id}`} className={styles.link}>Details</Link>
        <div>
          {findItem(state, productData.id) ? (
            <button className={styles.Buttons}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button className={styles.addItemButton}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
          {itemsCounter(state, productData.id) > 0 && (
            <span className={styles.counter}>{itemsCounter(state, productData.id)} </span>
          )}
          {itemsCounter(state, productData.id) === 1 && (
            <button className={styles.Buttons}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              {" "}
              <FiTrash2 />{" "}
            </button>
          )}
          {itemsCounter(state, productData.id) > 1 && (
            <button className={styles.Buttons}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
        </div>
        </div>
        </div>
    </div>
    
  );
};

export default Product;

import React, { useContext } from "react";
import { showCategory } from "../contextProvider/CategoryShowProvider";
import { cutTitle, findItem, itemsCounter } from "../helper/functions";
import { Link } from "react-router-dom";
import { cardContext } from "../contextProvider/AddItemContextProvider";
import { FiTrash2 } from "react-icons/fi";
import styles from "./ShowCategory.module.css";

const ShowCategory = () => {
  const [show] = useContext(showCategory);
  const { state, dispatch } = useContext(cardContext);
  return (
    <div className={styles.container}>
      {show.length !== 0 ? (
        show.map((item) => (
          <div key={item.id} className={styles.products}>
            <img src={item.image} alt="picture" />
            <div className={styles.TitlePrice}>
            <h3>{cutTitle(item.title)}</h3>
            <p>{item.price} $</p>
            </div>
            <div className={styles.detailButton}>
            <Link to={`/products/${item.id}`} className={styles.link}>Details</Link>
            {findItem(state, item.id) ? (
              <button className={styles.Buttons}
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
            ) : (
              <button className={styles.addItemButton}
                onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
              >
                Add to Cart
              </button>
            )}
            {itemsCounter(state, item.id) > 0 && (
              <span className={styles.counter}>{itemsCounter(state, item.id)}</span>
            )}
            {itemsCounter(state, item.id) === 1 && (
              <button className={styles.Buttons}
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
              >
               {" "}
              <FiTrash2 />{" "}
              </button>
            )}
            {itemsCounter(state, item.id) > 1 && (
              <button className={styles.Buttons}
                onClick={() => dispatch({ type: "DECREASE", payload: item })}
              >
                -
              </button>
            )}
          </div>
          </div>
        ))
      ) : (
        <h3 className={styles.noProduct}>NO PRODUCT FOUND!</h3>
      )}
      {/* <Link to="/">
        <button className={styles.backButton}>Back</button>{" "}
      </Link> */}
    </div>
  );
};

export default ShowCategory;

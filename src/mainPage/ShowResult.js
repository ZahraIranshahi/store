import React, { useContext } from "react";
import { SearchContext } from "./MainNavbar";
import { cutTitle , findItem ,itemsCounter} from "../helper/functions";
import { Link } from "react-router-dom";
import { cardContext } from "../contextProvider/AddItemContextProvider";
import { FiTrash2 } from "react-icons/fi";
import styles from "./ShowResult.module.css"
const ShowResult = () => {
  const searchResults = useContext(SearchContext);
  const { state, dispatch } = useContext(cardContext);
  return (
    <div className={styles.container}>
      { searchResults.length !== 0 ? (
        searchResults.map((item) => (
          <div key={item.id} className={styles.products}>
            <img src={item.image} alt="picture"/>
            <div className={styles.TitlePrice}>
            <h3>{cutTitle(item.title)}</h3>
            <p>{item.price} $</p>
            </div>
            <div className={styles.detailButton}>
            <Link to={`/products/${item.id}`} className={styles.link}>Details</Link>
            {findItem(state,item.id) ? <button onClick={()=>dispatch({ type: "INCREASE", payload: item })} className={styles.Buttons}>+</button>:<button onClick={()=>dispatch({ type: "ADD_ITEM", payload: item })} className={styles.addItemButton}>Add to Cart</button>}
            {itemsCounter(state,item.id) > 0 && <span className={styles.counter}>{itemsCounter(state,item.id)}</span>}
            {itemsCounter(state,item.id) === 1 && <button onClick={()=>dispatch({ type: "REMOVE_ITEM", payload: item })} className={styles.Buttons}>{" "}
              <FiTrash2 />{" "}</button> }
            {itemsCounter(state,item.id) > 1 && <button onClick={()=>dispatch({ type: "DECREASE", payload: item })} className={styles.Buttons}>-</button>}
          </div>
            </div>
        ))
      ) : (
        <h3 className={styles.noProduct}>NO PRODUCT FOUND!</h3>
      )
      }
      {/* <Link to="/" ><button>Back</button>{" "}</Link> */}
    </div>
  );
};

export default ShowResult;

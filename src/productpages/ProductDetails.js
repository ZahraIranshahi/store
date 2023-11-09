import React from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../contextProvider/ProducteContextProvider";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const productsDetail = useContext(ProductsContext);
  const params = useParams();
  const navigate = useNavigate();
  const oneProduct = productsDetail[params.id - 1];
  const { image, description, category, title, price } = oneProduct;
  const goBack = () => {
		navigate(-1);
	}
  return (
    <div className={styles.container}>
      <img src={image} alt="productDetail" />
      <div className={styles.texts}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.category}><span className={styles.categoryTitle}>Category: </span>{category}{" "}</p>
          <div className={styles.priceAndButton}>
            <p className={styles.price}>{price} $ </p>
          {/* <Link to="/products" ><button className={styles.link}>Back</button>{" "}</Link> */}
          <button onClick={goBack} className={styles.link}>Back</button>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;

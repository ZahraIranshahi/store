import React, { useContext } from "react";
import Product from "../productscomponent/Product";
import { ProductsContext } from "../contextProvider/ProducteContextProvider";
import styles from "./Store.module.css";
const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;

import React, { useState, useEffect, createContext } from "react";
import { fetchAPI } from "../services/Api";

export const ProductsContext = createContext();

const ProducteContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    setProducts(await fetchAPI());
  };

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProducteContextProvider;

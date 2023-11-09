import React, { useState, useContext, createContext } from "react";
import Logo from "../logo.svg";
import { ProductsContext } from "../contextProvider/ProducteContextProvider";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { TbMilkshake } from "react-icons/tb";
import { BsQuestionLg } from "react-icons/bs";
import { ImCreditCard } from "react-icons/im";
import { LiaFireAltSolid } from "react-icons/lia";
import { BiSolidOffer } from "react-icons/bi";
import styles from "./MainNavbar.module.css";

export const SearchContext = createContext();
const MainNavbar = (props) => {
  const productsResult = useContext(ProductsContext);
  const [word, setWord] = useState("");
  const [results, setResults] = useState([]);

  const handleWord = (event) => {
    setWord(event.target.value);
  };
  const handleResult = () => {
    setResults(productsResult.filter((item) => item.category === word));
  };
  return (
    <>
      <div className={styles.container}>
      <img src={Logo} alt="logo" className={styles.logo}/>
        <input 
          type="text"
          placeholder="   Search..."
          name="word"
          value={word}
          onChange={handleWord}
          className={styles.input}
        />
        <button onClick={handleResult} className={styles.search}>
          <Link to="/products/search"><FaSistrix  className={styles.link}/></Link>
        </button>

        <div className={styles.options}>
        <Link to="/products" className={styles.allproducts}>All Products</Link>
        <div>Ask Question<BsQuestionLg/> </div>
        <div>SuperMarket<TbMilkshake/> </div>
        <div>Gift Card <ImCreditCard/> </div>
        <div>Best Sellings<LiaFireAltSolid/> </div>
        <div>Offers <BiSolidOffer/> </div>
        </div>
      </div>
      <Link to="/signup"><button className={styles.loginbut}> Login|SignUp </button></Link>  
      <SearchContext.Provider value={results}>
        {props.children}
      </SearchContext.Provider>
    </>
  );
};

export default MainNavbar;

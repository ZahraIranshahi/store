import React from "react";
import SlideShow from "./SlideShow";
import Items from "./Items";
import Discounts from "./Discounts";
import Category from "./Category";
import Brands from "./Brands";
import Footer from "./Footer";
const Main = () => {
  return (
    <div>
      <SlideShow />
      <Items />
      <Discounts />
      <Category />
      <Brands />
      <Footer />
    </div>
  );
};

export default Main;

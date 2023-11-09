import React from "react";
import ProducteContextProvider from "./contextProvider/ProducteContextProvider";
import Store from "./productpages/Store";
import ShopCart from "./productpages/ShopCart";
import ProductDetails from "./productpages/ProductDetails";
import Navbar from "./productscomponent/Navbar";
import MainNavbar from "./mainPage/MainNavbar";
import ShowResult from "./mainPage/ShowResult";
import SignUp from "./loginAndSignUp/SignUp";
import Login from "./loginAndSignUp/Login";
import Main from "./mainPage/Main";
import CategoryShowProvider from "./contextProvider/CategoryShowProvider";
import ShowCategory from "./mainPage/ShowCategory";
import AddItemContextProvider from "./contextProvider/AddItemContextProvider";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <ProducteContextProvider>
        <AddItemContextProvider>
          <CategoryShowProvider>
            <MainNavbar>
              <Navbar />
              <Routes>
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/search" element={<ShowResult />} />
                <Route path="/category" element={<ShowCategory />} />
                <Route path="/products" element={<Store />} />
                <Route path="/shopcart" element={<ShopCart />} />
                <Route path="/" element={<Main />} />
              </Routes>
            </MainNavbar>
          </CategoryShowProvider>
        </AddItemContextProvider>
      </ProducteContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

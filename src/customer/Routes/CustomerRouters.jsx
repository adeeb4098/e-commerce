import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import Cart from "../components/Cart/Cart";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        
        {/* <Product/> */}
        {/* <ProductDetails /> */}
        {/* <Cart/> */}
        {/* <CheckOut /> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CustomerRouters;

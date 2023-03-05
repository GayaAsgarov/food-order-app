import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodOrder from "../pages/Food-order/FoodOrder";
import OrderDetail from "../pages/Order-detail/OrderDetail";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-food" element={<FoodOrder />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

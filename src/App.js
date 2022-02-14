import { useState } from "react";
import UserContext from "./context/UserContext";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import AllProduct from "./pages/NavigatePages/AllProducts";
import ArmorProduct from "./pages/NavigatePages/Armor";
import WeaponProduct from "./pages/NavigatePages/Weapon";
import HealProduct from "./pages/NavigatePages/Heal";

export default function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/all" element={<AllProduct />} />
          <Route path="/armor" element={<ArmorProduct />} />
          <Route path="/weapon" element={<WeaponProduct />} />
          <Route path="/heal" element={<HealProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

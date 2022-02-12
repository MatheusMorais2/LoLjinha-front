import { useState } from "react";
import UserContext from "./context/UserContext";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Cart from "./components/Cart";
import ConfirmPurchase from "./components/ConfirmPurchase";
import Product from "./components/Product";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirm-purchase" element={<ConfirmPurchase />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

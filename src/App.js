import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
}

export default App;

import "./App.css";
import { Header } from "./Header";
import { ProductsProvider } from "./ProductsProvider";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Cart from "./";

function App() {
  return (
    <ProductsProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </ProductsProvider>
  );
}

export default App;

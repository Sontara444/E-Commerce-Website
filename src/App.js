
import "./App.css";
import { Routes, Route , BrowserRouter as Router} from "react-router-dom";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { NotFound } from "./pages/not-found";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/: productId" element={<Product />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />

      </Routes>
      </Router>
    </>
  );
}

export default App;

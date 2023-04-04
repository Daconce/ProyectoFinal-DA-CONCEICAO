import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1> error 404: Not found </h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

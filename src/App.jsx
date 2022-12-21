import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <CartContextProvider>
      <BrowserRouter>
        <Navbar className="navbar"/>
        <div className="lista">
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/style/:estilo" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
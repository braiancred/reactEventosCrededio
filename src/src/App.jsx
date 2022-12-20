import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return(
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
  );
}

export default App;
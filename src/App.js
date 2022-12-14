import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Nosotros from "./pages/Nosotros/Nosotros"
import Howshop from "./pages/Howshop/Howshop"
import Contact from "./pages/Contact/Contact"
import Categories from "./pages/Categories/Categories"

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import data from "./pages/Categories/data.json"

function App() {
  return (
    <div>
      <NavBar />
      <Routes> 
        <Route path="/" element={ <ItemListContainer gretting="CATALOGO DE PRODUCTOS" /> }/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ItemDetailContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/howshop" element={<Howshop />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryId" element={<ItemListContainer gretting="CATALOGO DE PRODUCTOS" />} />
        <Route path="/category/:categoryId/item/:id" element={<ItemListContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

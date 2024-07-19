import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AddToProduct from "./components/AddToProduct";
import BayNow from "./components/BayNow";
import AddToBasket from "./components/AddToBasket";
import Man from "./components/Man";
import Women from "./components/Womеn";
import Kids from "./components/Kids";
import ProductDetails from "./components/ProductDetails";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/addToProduct" element={<AddToProduct />} />
        <Route path="/bayNow" element={<BayNow />} />
        <Route path="/addToBasket" element = {<AddToBasket/>}/>
        <Route path="/man" element = {<Man/>}/>
        <Route path="/women" element = {<Women/>}/>
        <Route path="/kids" element = {<Kids/>}/>
        <Route path="/details" element = {<ProductDetails/>}/>
        <Route path="/search" element = {<Search/>}/>

      </Routes>
    </div>
  );
}

export default App;

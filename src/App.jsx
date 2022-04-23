import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Navigation from "./componets/Navigation/Navigation";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import ListProduct from "./views/ListProducts/ListProduct";
import Location from "./views/Location/Location";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalle/:idProduct" element={<Detail/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/list" element={<ListProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;

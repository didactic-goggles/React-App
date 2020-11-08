// import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

import data from "./dummyData/data";

function App() {
  const [cart, setCart] = useState({});
  const products = data;
  const [searchKeyword, setSearchKeyword] = useState("");

  return (<React.Fragment>
    <Header setSearchKeyword={setSearchKeyword} cart={cart}/>
    <Content
      cart={cart}
      setCart={setCart}
      products={products}
      searchKeyword={searchKeyword}
    />
    <Footer />
  </React.Fragment>

  );
}

export default App;

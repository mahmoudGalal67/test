import React from "react";
import Nav from "../components/Nav/Nav";
import Info from "../components/Info/Info";
import Header from "../components/header/Header";
import Catigory from "../components/Category/Catigory";
import Product from "../components/Product/Product";
import BestSeller from "../components/BestSeller/BestSeller";
import LatestProducts from "../components/LatestProducts/LatestProducts";

function Home() {
  return (
    <div className="home">
      <Info />
      <Nav />
      <Header />
      <Catigory />
      <BestSeller />
      <LatestProducts />
    </div>
  );
}

export default Home;

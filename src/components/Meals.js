import React from "react";
import Food1 from "./Food1";
import Food2 from "./Food2";
import Food3 from "./Food3";
import "../App.css";
import Footer from "./Footer";

const Meals = () => {
  return (
    <div class="header-color">
      <Food1 />
      <br />
      <Food2 />
      <br />
      <Food3 />
      <Footer />
    </div>
  );
};

export default Meals;

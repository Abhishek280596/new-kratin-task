import React from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./Main";
import { Link } from "react-router-dom";
import Image from "../components/images/yoga.jpg";
import "./Nav.css";
import "../App.css";

const Navb = () => {
  return (
    <>
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color">
            <img src={Image} className="nav__logo" />
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/exercise">Exercise</Link>
              <Link to="/meal">Meals</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </>
  );
};

export default Navb;

import React from "react";
import "./Home.css";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Hero from "../../Home/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;

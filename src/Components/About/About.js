import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-indigo-800">
        <div className="container mx-auto w-full h-screen flex items-center justify-center text-white">
          <div>
            <h1 className="text-5xl mb-8">About Us</h1>
            <p className="text-xl leading-normal text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea vitae
              architecto quos autem, expedita error odit consequuntur eos
              corrupti voluptatum, aut neque doloribus nam, quas impedit
              asperiores ut sapiente tenetur tempore doloremque! Laboriosam
              consequatur asperiores quas quasi eos quaerat in, tempore maiores
              quae eligendi corporis numquam rerum illum, facere omnis
              perspiciatis nam rem. Ea, culpa nobis est necessitatibus hic porro
              aliquid ipsa aspernatur magnam dolorem esse! Aperiam, ad
              reprehenderit error eum quisquam minima nulla deleniti repellendus
              iure. Natus quae quod tenetur ullam nisi! Cupiditate, nihil quasi,
              pariatur facilis quibusdam cum hic vero eligendi consequuntur
              voluptate voluptatibus tenetur et, sit quo?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

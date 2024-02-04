import React, { useState } from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero-sect flex col">
        <h1>I'm Web Designer & Developer</h1>
        <p>
          Hello! I'm Jawad, a freelance web interface designer & developer based
          in Pakistan. I’m very passionate about the work that I do.{" "}
        </p>
        <div className="btns">
          <button>My Projects</button>
          <button>Contact Me</button>
        </div>
        <div className="my-email">
          <a href="">jawadal829@gmail.com</a>
        </div>
      </div>
      <div className="about-me"></div>
    </div>
  );
};

export default Home;

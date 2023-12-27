import React, { useState } from "react";
import Typed from "typed.js";
import { useEffect } from "react";

const Home = () => {
  const [dark, setDark] = useState(false);
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developers",
        "Backend Developers",
        "Graphic Designers",
      ],
      smartBackspace: true,
      typeSpeed: 50,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="header">
        <img
          src={`${dark == true ? "./logo-black.jpg" : "./logo-white.jpg"}`}
          alt=""
        />
        <div className="main-menu">
          <div
            className="bar"
            style={{ background: `${dark == true ? "white" : "black"}` }}
          ></div>
          <div
            className="bar"
            style={{ background: `${dark == true ? "white" : "black"}` }}
          ></div>
          <div
            className="bar"
            style={{ background: `${dark == true ? "white" : "black"}` }}
          ></div>
        </div>
      </div>
      <div
        className="hero-sect"
        style={{
          background: `${dark == true ? "black" : "white"}`,
          color: `${dark == true ? "white" : "black"}`,
        }}
      >
        <h1 style={{ color: `${dark == true ? "white" : "black"}` }}>
          Welcome
        </h1>
        <h1 style={{ color: `${dark == true ? "white" : "black"}` }}>
          To The Site Of
        </h1>
        <h2
          style={{
            WebkitTextStroke: `${dark == true ? "2px white" : "2px black"}`,
          }}
          ref={el}
        ></h2>
        <i
          style={{ color: `${dark == true ? "white" : "black"}` }}
          className="uil uil-arrow-down arrow-down"
        ></i>
      </div>
      <div className="theme-switch">
        <div
          className="dark"
          style={{
            background: `${dark == true ? "orange" : "transparent"}`,
            color: `${dark == true ? "white" : "orange"}`,
          }}
          onClick={() => setDark(true)}
        >
          <i className="uil uil-moon"></i>
        </div>
        <div
          className="white"
          style={{
            background: `${dark == false ? "orange" : "transparent"}`,
            color: `${dark == false ? "white" : "orange"}`,
          }}
          onClick={() => setDark(false)}
        >
          <i className="uil uil-sun"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;

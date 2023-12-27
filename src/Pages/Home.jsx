import React, { useState } from "react";
import Typed from "typed.js";
import { useEffect } from "react";

const Home = () => {
  const [click, handleClick] = useState(false);
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("/");
  const setNavigate = (e) => {
    e.preventDefault();
    setTab(e.target.value);
  };
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developers", "Graphics Designers", "App Developers"],
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
        <div className="logo">
          <h1>
            <h2>WEB</h2> <span>TECH</span>
          </h1>
        </div>
        <div className="main-menu" onClick={() => handleClick(true)}>
          <div className="bar" style={{ background: "orange" }}></div>
          <div className="bar" style={{ background: "orange" }}></div>
          <div className="bar" style={{ background: "orange" }}></div>
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
        <h2 ref={el}></h2>
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
      <div
        className={click == true ? "mobile-menu-on" : "mobile-menu"}
        style={{ background: `${dark == true ? "black" : "white"}` }}
      >
        <i
          className="uil uil-multiply close-btn"
          style={{ color: "orange" }}
          onClick={() => handleClick(false)}
        ></i>
        {tab == "/" ? (
          <a href="" className="active">
            Home
          </a>
        ) : (
          <a
            href=""
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => e.preventDefault() + setTab("/")}
          >
            Home
          </a>
        )}
        {tab == "/About" ? (
          <a href="" className="active">
            About
          </a>
        ) : (
          <a
            href=""
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => e.preventDefault() + setTab("/About")}
          >
            About
          </a>
        )}
        {tab == "/Team" ? (
          <a href="" className="active">
            Team
          </a>
        ) : (
          <a
            href=""
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => e.preventDefault() + setTab("/Team")}
          >
            Team
          </a>
        )}
        {tab == "/Work" ? (
          <a href="" className="active">
            Work
          </a>
        ) : (
          <a
            href=""
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => e.preventDefault() + setTab("/Work")}
          >
            Work
          </a>
        )}
        {tab == "/Contact" ? (
          <a href="" className="active">
            Contact
          </a>
        ) : (
          <a
            href=""
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => e.preventDefault() + setTab("/Contact")}
          >
            Contact
          </a>
        )}
      </div>
    </div>
  );
};

export default Home;

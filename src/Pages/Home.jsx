import React, { useState } from "react";
import Typed from "typed.js";
import { useEffect } from "react";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
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
      strings: ["APP Developer", "Graphics Designer", "Flutter Developer"],
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
            <h2>SAN</h2>
            <span>DESH</span>
          </h1>
        </div>
        <div className="main-menu" onClick={() => handleClick(true)}>
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
          ref={el}
          style={{ color: `${dark == true ? "white" : "black"}` }}
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
      <div
        className={click == true ? "mobile-menu-on" : "mobile-menu"}
        style={{ background: `${dark == true ? "black" : "white"}` }}
      >
        <i
          className="uil uil-multiply close-btn"
          style={{ color: `${dark == true ? "white" : "black"}` }}
          onClick={() => handleClick(false)}
        ></i>
        {tab == "/" ? (
          <a href="" className="active">
            Home
          </a>
        ) : (
          <a
            href="/"
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => setTab("/")}
          >
            Home
          </a>
        )}
        {tab == "#About" ? (
          <a href="#about" className="active">
            About
          </a>
        ) : (
          <a
            href="#about"
            className="not-active"
            style={{ color: `${dark == true ? "white" : "black"}` }}
            onClick={(e) => setTab("#About")}
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
      <div
        className="about-page"
        id="about"
        style={{
          background: `${dark == true ? "black" : "white"}`,
          color: `${dark == true ? "white" : "black"}`,
        }}
      >
        <img src="./hero.jpg" alt="" />
        <div className="content">
          <h1>About Me</h1>
          <p>
            Hello! I'm Sandesh Kumar, a passionate computer science graduate
            with a knack for creating captivating digital experiences. My
            journey into the world of technology started with a simple curiosity
            and has evolved into a dedication to crafting innovative solutions.
          </p>
          <button
            style={{
              background: `${dark == true ? "#ffffff1c" : "orange"}`,
              color: `${dark == true ? "white" : "white"}`,
            }}
            onClick={() => setShowAbout(true)}
          >
            Read More
          </button>
        </div>
      </div>
      {showAbout == true ? (
        <div className="about-me">
          <i
            className="uil uil-multiply close-btn"
            onClick={() => setShowAbout(false)}
          ></i>
          <div className="heading">
            <h1>About</h1>
            <p>
              👨‍💻 Hello! I'm Sandesh Kumar, a passionate computer science
              graduate with a knack for creating captivating digital
              experiences. My journey into the world of technology started with
              a simple curiosity and has evolved into a dedication to crafting
              innovative solutions. <br />
              🚀 As a 2023 graduate in computer science, I've honed my skills
              and found my true passion in Flutter, Google's UI toolkit for
              building natively compiled applications for mobile, web, and
              desktop from a single codebase. Specializing in this versatile
              framework, I thrive on creating seamless and visually striking
              cross-platform applications that leave a lasting impression.{" "}
              <br /> 🌟 My portfolio is a showcase of my commitment to
              excellence in mobile app development. Each project is a testament
              to my expertise in Flutter, where I seamlessly blend creativity
              with functionality to deliver user-centric solutions. From
              intuitive user interfaces to optimized performance, I bring a
              holistic approach to every project. 📱 Explore my work, and you'll
              discover a collection of apps that reflect my dedication to
              innovation and design. Whether it's a utility app, a productivity
              tool, or a visually stunning application, I believe in the power
              of technology to enhance our daily lives. <br /> 🌐 Beyond the
              code, I'm always looking for opportunities to collaborate and
              learn from like-minded individuals. If you share my passion for
              Flutter, have exciting ideas, or just want to connect, don't
              hesitate to reach out. Let's create something extraordinary
              together! 📧 Feel free to drop me a line at [your@email.com] or
              connect with me on LinkedIn and GitHub. I'm excited to embark on
              new challenges and contribute to the ever-evolving world of
              technology. Happy coding! 🚀✨
            </p>
          </div>
        </div>
      ) : (
        this
      )}
    </div>
  );
};

export default Home;

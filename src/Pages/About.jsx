import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const naviagate = useNavigate();
  function About_Me() {
    return (
      <div className="about-sect">
        <h1>About ME</h1>
        <p>
          I'm a versatile IT professional, adept web developer, and
          cybersecurity expert. With a passion for technology, they excel in
          creating seamless web experiences and implementing robust security
          measures. A strategic thinker, I actively contributes innovative
          solutions to complex IT challenges, making a significant impact in the
          dynamic fields of web development and cybersecurity.
        </p>
      </div>
    );
  }
  function My_Education() {
    return (
      <div className="about-sect">
        <h1>my education</h1>
        <p>
          <div className="dots">
            <h2>2018-2020</h2>
            <p>
              Done My Hsc from my city college with 90% academic records in pre
              medical
            </p>
          </div>
          <div className="dots">
            <h2>2020-2024</h2>
            <p>
              doing my bachelors in information technology from hec recognized
              university with aggrigate 3.5 Gpa.
            </p>
          </div>
          <div className="dots">
            <h2>2023-2024</h2>
            <p>
              done my bootcamp from government delievered via the iba university
              sukkur with 90% academic record
            </p>
          </div>
        </p>
      </div>
    );
  }
  function My_Skills() {
    return (
      <div className="about-sect">
        <h1>Skills ME</h1>
      </div>
    );
  }
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };
  const [tab, setTab] = useState(window.location.pathname);
  const [showMenu, steShowMenu] = useState(false);
  const [activeInfo, setActiveInfo] = useState(1);
  return (
    <div className="about-me flex" onMouseMove={handleMouseMove}>
      <div
        className="cutom-cursor flex"
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          left: `${coordinates.x}px`,
          top: `${coordinates.y}px`,
          border: "1px solid rgba(255,255,255,.2)",
          color: "white",
          transform: "translate(-50% , -50%)",
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="small-dot"
          style={{
            width: "5px",
            height: "5px",
            background: "white",
            borderRadius: "50%",
            boxShadow:
              "0 0 10px white , 0 0 20px white, 0 0 100px white , 0 0 300px white , 0 0 500px orange",
          }}
        ></div>
      </div>
      <div className="top-nav flex between">
        <div className="logo">
          <a href="" className="flex">
            <p>J</p>
            <span>awad</span>
          </a>
        </div>
        <div className="navs" onClick={() => steShowMenu(true)}>
          <div className="icon flex col">
            <div className="flex" style={{ gap: "5px" }}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="flex" style={{ gap: "5px" }}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="flex" style={{ gap: "5px" }}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main-menu"
        style={{ maxWidth: `${showMenu == true ? "100%" : "0%"}` }}
      >
        <i
          className="uil uil-multiply close-btn"
          onClick={() => steShowMenu(false)}
        ></i>
        <div className="menu-navs">
          <ul>
            <li onClick={() => naviagate("/")}>Home</li>
            {tab == "/about" ? (
              <li className="active">About</li>
            ) : (
              <li>About</li>
            )}
            <li>Contact</li>
            <li>Projects</li>
          </ul>
          <div className="links flex">
            <a href="">jawadal829@gmail.com</a>
            <a href="">+923173270808</a>
            <div className="social">
              <a href="">
                <i className="uil uil-youtube"></i>
              </a>
              <a href="">
                <i className="uil uil-facebook"></i>
              </a>
              <a href="">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="">
                <i className="uil uil-twitter"></i>
              </a>
              <a href="">
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="toggler">
          <ul>
            {activeInfo == 1 ? (
              <li className="active">About</li>
            ) : (
              <li onClick={() => setActiveInfo(1)}>About</li>
            )}
            {activeInfo == 2 ? (
              <li className="active">Education</li>
            ) : (
              <li onClick={() => setActiveInfo(2)}>Education</li>
            )}
            {activeInfo == 3 ? (
              <li className="active">Skills</li>
            ) : (
              <li onClick={() => setActiveInfo(3)}>Skills</li>
            )}
          </ul>
        </div>
        <div className="main-content">
          {activeInfo === 1 ? <About_Me /> : this}
          {activeInfo === 2 ? <My_Education /> : this}
          {activeInfo === 3 ? <My_Skills /> : this}
        </div>
      </div>
    </div>
  );
};

export default About;

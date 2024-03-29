import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };
  const [showMenu, steShowMenu] = useState(false);
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="home-page flex col" onMouseMove={handleMouseMove}>
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
      <div className="content">
        <h1>
          Hey There! I'm Jawad <br />
          You Can Call ME MR Jawad
        </h1>
        <p>I am Web Developer , Ui/ux designer & full stack developer</p>
        <div className="btns">
          <button>See My Projects</button>
          <button>About ME</button>
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
            {tab == "/" ? <li className="active">Home</li> : <li>home</li>}
            <li onClick={() => navigate("/about")}>About</li>
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
    </div>
  );
};

export default Home;

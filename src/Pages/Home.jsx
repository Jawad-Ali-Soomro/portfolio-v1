import React, { useState } from "react";
import {
  BiCross,
  BiLogoAdobe,
  BiLogoAndroid,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiPen,
} from "react-icons/bi";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { HiArrowNarrowDown } from "react-icons/hi";

const Home = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };
  const [showMenu, steShowMenu] = useState(false);
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="home-page flex col" onMouseMove={handleMouseMove}>
      <div
        className="cutom-cursor"
        style={{
          position: "absolute",
          left: `${coordinates.x}px`,
          top: `${coordinates.y}px`,
          border: "none",
          color: "white",
          transform: "translate(-50% , -50%)",
          cursor: "none",
        }}
        onMouseMove={handleMouseMove}
      >
        <BiCross style={{ fontSize: "2rem" }} />
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
            {tab == "/" ? <li className="active">Home</li> : <li>not home</li>}
            <li>About</li>
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

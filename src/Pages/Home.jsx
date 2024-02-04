import React, { useState } from "react";
import {} from "react-icons/bi";

const Home = () => {
  const [showMenu, steShowMenu] = useState(false);
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="home-page flex col">
      <div className="top-nav flex between">
        <div className="logo">
          <a href="" className="flex">
            <p>J</p>
            <span>awad</span>
          </a>
        </div>
        <div className="navs">
          <div className="icon flex col" onClick={() => steShowMenu(true)}>
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

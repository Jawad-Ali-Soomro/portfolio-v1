import React, { useState, useEffect } from "react";

const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setMobileScreen(true);
      } else {
        setMobileScreen(false);
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {mobileScreen == true ? (
        <div className="header-mobile flex between">
          <a href="" className="logo flex">
            <p>J</p>awad
          </a>
          <i
            className="uil uil-bars show-menu"
            onClick={() => setShowMenu(true)}
          ></i>
          <div
            className="main-mobile-header"
            style={{ maxWidth: `${showMenu == true ? "100%" : "0px"}` }}
          >
            <div
              className="left-nav flex col"
              style={{ maxWidth: `${showMenu == true ? "100%" : "0px"}` }}
            >
              <i
                className="uil uil-multiply  close-menu"
                onClick={() => setShowMenu(false)}
              ></i>
              <ul className="flex col">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <div className="contacts flex col">
                  <a href="">jawadal829@gmail.com</a>
                  <a href="">+923173270808</a>
                </div>
                <div className="links">
                  <ul className="flex">
                    <a href="/">
                      <i className="uil uil-youtube"></i>
                    </a>
                    <a href="/">
                      <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="uil uil-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="uil uil-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="uil uil-github-alt"></i>
                    </a>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-desktop flex around">
          <a href="" className="logo flex">
            <p>J</p>awad
          </a>
          <div className="navs">
            <ul className="flex">
              {tab == "/" ? <li className="active">Home</li> : <li>Home</li>}
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="links">
            <ul className="flex">
              <a href="/">
                <i className="uil uil-youtube"></i>
              </a>
              <a href="/">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="/">
                <i className="uil uil-twitter"></i>
              </a>
              <a href="/">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="/">
                <i className="uil uil-github-alt"></i>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

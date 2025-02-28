import bdLogo from "../assets/logos/bd-visitng card.jpg";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const navigationListData = [
    { name: "Home", path: "home" },
    { name: "Gallery", path: "gallery" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleOpacityScroll = () => {
      const currentScrollY = window.scrollY;
      setOpacity(currentScrollY < lastScrollY ? 1 : 0.4);
      setLastScrollY(currentScrollY);
    };

    const handleMouseOver = () => {
      setOpacity(1);
    };

    window.addEventListener("scroll", handleOpacityScroll);
    document
      .querySelector(".topNavbar")
      .addEventListener("mouseenter", handleMouseOver);

    return () => {
      window.removeEventListener("scroll", handleOpacityScroll);
      document
        .querySelector(".topNavbar")
        .addEventListener("mouseenter", handleMouseOver);
    };
  }, [lastScrollY]);

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div
        className="topNavbar"
        style={{
          display: "flex",
          zIndex: "1000",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.8)",
          height: "56px",
          opacity: opacity,
          transition: "opacity 0.3s ease-in-out",
          maxHeight: "100%",
          position: "fixed",
          top: "0",
          width: "100%"
        }}
      >
        <nav
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            margin: "0 auto",
            width: "100%",
            alignContent: "center"
            // maxWidth: "1200px",
          }}
        >
          <div className="brand-logo">
            <a href="#home">
              <img
                src={bdLogo}
                alt="Logo"
                style={{ paddingTop: "5px", width: "50px" }}
              />
            </a>
          </div>
          <div>
            <ol
              style={{
                margin: "0.4rem 1rem",
                height: "2.8rem",
                display: "flex",
                position: "relative",
                overflow: "hidden",
                gap: "1rem",
                width: "45rem",
                justifyContent: "center",

              }}
            >
              {navigationListData.map((navItem, index) => (
                <li
                  key={index}
                  onClick={() =>
                    document
                      .getElementById(navItem.path)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    listStyle: "none",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    padding: "0.5rem 2rem",
                    textAlign: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    backgroundColor: "#f8f9fa",
                    color: "#000000",
                    border: "1px solid grey",
                    boxShadow: "0px 0px 10px 5px rgba(0, 0.4, 1, 0.2)",
                    height: "2.7rem",
                    letterSpacing: "0.2rem",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#f12311";
                    e.target.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#f8f9fa";
                    e.target.style.color = "#000000";
                  }}
                >
                  {navItem.name}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}

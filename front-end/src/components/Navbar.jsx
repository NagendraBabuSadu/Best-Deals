import bdLogo from "../assets/logos/bd-visitng card.jpg";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const navigationListData = [
    { name: "Home", path: "home" },
    { name: "Gallery", path: "gallery" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Track active item index
  const originalColor = "#000000"; // Default color
  const originalBackgroundColor = "#ffffff"; // Default color

  return (
    <div style={{ overflow: "visible"}}>
      <div
        className="topNavbar"
        style={{
          display: "flex",
          zIndex: "1000",
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.6)",
          height: "64px",
          justifyContent: "center",
          transition: "opacity 0.3s ease-in-out",
          position: "fixed",
          top: "0",
          width: "100%",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            margin: "5px auto",
            width: "100%",
            alignContent: "center",
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
                  onClick={() => {
                    document
                      .getElementById(navItem.path)
                      ?.scrollIntoView({ behavior: "smooth" }),
                      setActiveIndex(index);
                  }}
                  style={{
                    listStyle: "none",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    padding: "0.4rem 2rem",
                    textAlign: "center",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    color: activeIndex === index ? "red" : originalColor,
                    height: "2.7rem",
                    letterSpacing: "0.2rem",
                    border: "1px solid grey",
                    backgroundColor: originalBackgroundColor
                  }}
                  onMouseOver={(e) => {
                    if (activeIndex !== index) { e.target.style.color = "yellow";
                      e.target.style.backgroundColor = "black"
                    } 
                  }}
                  onMouseOut={(e) => {
                    if (activeIndex !== index)
                      e.target.style.color = originalColor; 
                     e.target.style.backgroundColor = originalBackgroundColor
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

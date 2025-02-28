import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import bdLogo from "../assets/logos/best-deals-logo.png";
import img1 from "../assets/images/galleryImages/hall-1.jpg";
import img2 from "../assets/images/galleryImages/hall2.jpg";
import img3 from "../assets/images/galleryImages/hall-3.jpg";
import img4 from "../assets/images/galleryImages/bedroom-1.jpg";
import img5 from "../assets/images/galleryImages/bedroom-2.jpg";
import img6 from "../assets/images/galleryImages/bedroom-3.jpg";
import img7 from "../assets/images/galleryImages/kitchen-1.jpg";
import img8 from "../assets/images/galleryImages/kitchen-2.jpg";
import img9 from "../assets/images/galleryImages/washroom-1.jpg";
import img10 from "../assets/images/galleryImages/washroom-2.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationListData = [
    { name: "Home", path: "home" },
    { name: "Gallery", path: "gallery" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleOpacityScroll = () => {
      const currentScrollY = window.scrollY;
      setOpacity(currentScrollY > lastScrollY ? 0.4 : 1);
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
        .removeEventListener("mouseenter", handleMouseOver);
    };
  }, [lastScrollY]);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className="topNavbar"
        style={{
          position: "sticky",
          top: "0",
          display: "flex",
          zIndex: "1000",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.8)",
          height: "56px",
          opacity: opacity,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <nav
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
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
                margin: "0rem 1rem",
                height: "2.7rem",
                display: "flex",
                position: "relative",
                overflow: "hidden",
                gap: "1rem",
                width: "45rem",
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

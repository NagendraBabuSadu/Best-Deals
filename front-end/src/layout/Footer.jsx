import { Button, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useEffect, useState } from "react";

export default function Footer() {
    const [opacity, setOpacity] = useState(1);
    const [lastScrollY, setLastScrollY] = useState(0);

 useEffect(() => {
    const handleOpacityScroll = () => {
      const currentScrollY = window.scrollY;
      setOpacity(currentScrollY > lastScrollY ? 1 : 0.1);
      setLastScrollY(currentScrollY);
    };

    const handleMouseOver = () => {
        setOpacity(1)
    }

    window.addEventListener("scroll", handleOpacityScroll);
    document.querySelector(".topNavbar").addEventListener("mouseenter", handleMouseOver)

    return () => {
      window.removeEventListener("scroll", handleOpacityScroll);
      document.querySelector(".topNavbar").addEventListener("mouseenter", handleMouseOver)
    };
  }, [lastScrollY]);
    
  return (
    <div>
      <Button
        sx={{
          position: "fixed",
          bottom: "20px", 
          right: "20px", 
          zIndex: 1000, 
          color: "white",
          height: "4rem",
          backgroundColor: "grey",
          opacity: opacity,
          "&:hover": {
            backgroundColor: "black",
          },
        }}
        onClick={() => {
          window.scrollTo({ top: "0", behavior: "smooth" });
        }}
      >
        <ArrowUpwardIcon />
      </Button>
      <div
        style={{
          height: "3rem",
          width: "100%",
          textAlign: "center",
          padding: "2px 0rem",
          border: "1px solid black",
          borderRight: null,
          color: "#006f6f",
        }}
      >
        <Typography sx={{ fontSize: "2rem" }}>
          <CopyrightIcon /> Best Deals Interiors
        </Typography>
      </div>
    </div>
  );
}

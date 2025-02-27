import React, { useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  Grid2,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
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


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Gallerypage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Open image in fullscreen mode
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Close fullscreen mode
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="gallery">

    <Box sx={{ p: 2 }} m="0rem 0rem" textAlign="center" >
      <Typography variant="h2" m="2rem 2rem">Images Gallery</Typography>
      {/* Image Grid */}
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={700}>
        {images.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onClick={() => handleOpen(item)}
              />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Fullscreen Image Popup */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
          >
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
            onClick={handleClose}
            >
            {/* <CloseIcon /> */}
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Fullscreen Image"
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              objectFit: "contain",
            }}
            />
        </Box>
      </Dialog>
    </Box>
            </div>
  );
}

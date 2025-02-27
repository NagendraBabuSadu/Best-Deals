import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Gallerypage from "./pages/Gallerypage";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Homepage />
      <Gallerypage />
      <Aboutpage />
    </>
  );
}

export default App;

import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Gallerypage from "./pages/Gallerypage";
import Layout from "./layout/Layout";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
      <Layout>
         <Homepage />
        <Gallerypage />
        <Aboutpage />
        <Contactpage />
      </Layout>
   
    </>
  );
}

export default App;

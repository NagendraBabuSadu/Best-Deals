import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function Layout({children}){

    return (
        <div className="layout">
            <Navbar />
            <main className="outlet-page" >
              {children}
            </main>
            <Footer />
        </div>
    )
}
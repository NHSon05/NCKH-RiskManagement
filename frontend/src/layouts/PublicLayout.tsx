import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar";
import Footer from "../components/layout/Footer/Footer";
import ScrollToTop from "../hooks/ScrollToTop";

// import './MainLayout.css'

function PublicLayout() {
    return (  
        <div>
            <NavBar isLogin={false}/>
            <ScrollToTop/>
            <div className="wrapper text-center items-center">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default PublicLayout;
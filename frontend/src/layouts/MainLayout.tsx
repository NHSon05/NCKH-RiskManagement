import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar";
import Footer from "../components/layout/Footer/Footer";
import ScrollToTop from "../hooks/ScrollToTop";
// import './MainLayout.css'

function MainLayout() {
    return (  
        <div>
            <NavBar isLogin={true}/>
            <ScrollToTop/>
            <div className="wrapper text-center items-center my-8">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;
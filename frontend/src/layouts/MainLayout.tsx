import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar";
import Footer from "../components/layout/Footer/Footer";
// import './MainLayout.css'

function MainLayout() {
    return (  
        <div>
            <NavBar isLogin={true}/>
            <div className="mx-8 sm:mx-16 md:mx-24 py-16 text-center items-center">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;
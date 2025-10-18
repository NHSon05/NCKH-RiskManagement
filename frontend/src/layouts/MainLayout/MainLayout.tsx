import { Outlet } from "react-router-dom";
import NavBar from "../../components/layout/NavBar/NavBar";
import Footer from "../../components/layout/Footer/Footer";
// import './MainLayout.css'

function MainLayout() {
    return (  
        <div>
            <NavBar/>
            <div className="mx-32 py-16 text-center items-center">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;
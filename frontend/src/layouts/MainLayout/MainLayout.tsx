import { Outlet } from "react-router-dom";
import NavBar from "../../components/layout/NavBar/NavBar";
import './MainLayout.module.scss'
// import './MainLayout.css'

function MainLayout() {
    return (  
        <div>
            <NavBar/>
            <div className="flex justify-center items-center w-full h-[80vh]">
                <Outlet/>
            </div>
        </div>
    );
}

export default MainLayout;
import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar";
import './MainLayout.module.scss'

function MainLayout() {
    return (  
        <div>
            <NavBar/>
            <div className="flex justify-center w-[100%] h-[80vh] ">
                <Outlet/>
            </div>
        </div>
    );
}

export default MainLayout;
import React from "react";
import logo from '../../../assets/imgs/logo.svg';
// import './NavBar.module.css';
import { NavLink } from "react-router-dom";
// import Button from "../../common/Button";
// import './NavBar.css'

interface Links{
    label:string;
    to: string
}
const NavBar: React.FC = () => {

    const currentUser = true;

    const links:Links[] = [
        { label: "Trang chủ", to: "/" },
        { label: "Dự án", to: "/projects" },
        { label: "Báo cáo", to: "/reports" },
        { label: "Hỗ trợ", to: "/support" },
    ];
    return (  
        <header className="flex justify-between items-center w-full">
            <img src={logo} alt="Logo"/>
            <ul>
                {links.map((link)=>(
                    <li key={link.to} className="inline-flex hover:text-gray-500 cursor-pointer 
                                                mx-[10px] my-0">
                        <NavLink to={link.to}>{link.label}</NavLink>
                    </li>
                ))} 
            </ul>
            <div>
                {currentUser ? (
                    <div className="flex gap-2">
                        <button className="bg-[var(--economy)] p-20">Thêm dự án</button>
                        <button className="bg-[var(--economy)] p-20">Đăng xuất</button>
                    </div>
                ) : (
                    <>
                        <button>Đăng ký</button>
                        <button>Đăng nhập</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default NavBar;
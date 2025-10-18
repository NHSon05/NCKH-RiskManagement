// import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from '../../../assets/imgs/logo.svg';

import Button from "../../common/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import './NavBar.css'

interface Links{
    label:string;
    to: string
}
interface NavBarProps{
    isLogin?:boolean;
}


function NavBar({isLogin = true}: NavBarProps){
    
    const [isLoggedIn, setIsLoggedIn] = useState(isLogin);
    const navigate = useNavigate();

    const links:Links[] = [
        { label: "Trang chủ", to: "/home" },
        { label: "Dự án", to: "/projects" },
        { label: "Báo cáo", to: "/reports" },
        { label: "Hỗ trợ", to: "/support" },
    ];
    return (
        <div className="w-full border-b border-[var(--border)] bg-[var(--white)] sticky z-99 top-0">
            <nav className="flex justify-between items-center px-2 sm:px-12">
                <Link to='/home'>
                    <img src={logo} alt="Logo" className="h-12"/>
                </Link>
                <div className="flex items-center py-2 gap-2">
                    <ul className={`hidden ${isLoggedIn ? 'md:block' : 'md:hidden'}`}>
                        {links.map((link)=>(
                            <li key={link.to} className="inline-flex hover:text-gray-500 cursor-pointer mx-[10px] my-0">
                                <NavLink to={link.to}><span>{link.label}</span></NavLink>
                            </li>
                        ))} 
                    </ul>
                    <div className=" sm:block">
                        {isLoggedIn ? (
                            <div className="flex gap-2">
                                <Button variant="primary" title="Thêm dự án" onClick={() => {navigate('projects/info')}}/>
                                
                                <Button variant="red" title="Đăng xuất" 
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    navigate('/');
                                }}/>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <Button variant="primary" title="Đăng nhập" 
                                onClick={() => {
                                    setIsLoggedIn(true);
                                    navigate('home')
                                }}/>
                                <Button variant="secondary" title="Đăng ký"/>
                            </div>
                        )}
                    </div>
                    <div className="sm:hidden">
                        <FontAwesomeIcon icon={faBars} className="hidden"/>
                    </div>
                </div>
            </nav>
        </div>  
    );
}

export default NavBar;
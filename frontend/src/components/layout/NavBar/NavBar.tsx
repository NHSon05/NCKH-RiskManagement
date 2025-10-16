import React from "react";
import logo from '../../../assets/imgs/logo.svg';
import './NavBar.module.scss';
import { NavLink } from "react-router-dom";
// import './NavBar.css'

const NavBar: React.FC = () => {

    const currentUser = false;

    return (  
        <header className="flex justify-between items-center">
            <img src={logo} alt="Logo"/>
            <ul>
                <NavLink to='/'>Trang chủ</NavLink>
                <NavLink to='/projects'>Dự án</NavLink>
                <NavLink to='/reports'>Báo cáo</NavLink>
                <NavLink to='/support'>Hỗ trợ</NavLink>
            </ul>
            <div>
                {currentUser ? (
                    <>
                        <button>Thêm dự án</button>
                        <button>Đăng xuất</button>
                    </>
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
import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import SidebarComponent from "../components/sidebar/SidebarComponent";
import "./AuthLayout.scss"

const AuthLayout = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="container">
                <SidebarComponent />
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;

import React from "react";
import "./NavbarComponent.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {getUserData} from "../../utility/utils";
import avatar from "../../assets/images/avatar.png";

const NavbarComponent = () => {
    const userName = getUserData().name;
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navLeft">
                    <span className="logo">{ userName }</span>
                </div>
                <div className="navRight">
                    <div className="navbarIconContainer">
                        <NotificationsNone />
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                        <Language />
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                        <Settings />
                    </div>
                    <img src={avatar} alt="" className="navAvatar" />
                </div>
            </div>
        </div>
    );
}


export default NavbarComponent;

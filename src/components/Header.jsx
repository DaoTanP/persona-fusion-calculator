import React from "react";

function Header(props) {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <button
                    className="material-symbols-outlined 
                    toggle-sidebar-btn
                    border-0
                    bg-transparent"
                    onClick={props.toggleSidebar}>
                    menu
                </button>
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src={props.logo} alt="" />
                    <span className="d-none d-lg-block">{props.title}</span>
                </a>
            </div>

        </header>
    );
}

export default Header;
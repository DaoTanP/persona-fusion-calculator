import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <span>Home</span>
                    </Link>
                </li>

                <li className="nav-heading">Persona 3</li>

                <li className="nav-item">
                    <a
                        className="nav-link active"
                        data-bs-target="#p3p-nav"
                        data-bs-toggle="collapse"
                        aria-expanded="true">
                        <span>Persona 3 Portable</span>
                        <span className="material-symbols-outlined bi-chevron-down ms-auto">
                            expand_more
                        </span>
                    </a>
                    <ul
                        id="p3p-nav"
                        className="nav-content collapse show"
                        data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/persona-3-portable/recipe-generator" className="active">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Recipe Generator</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/persona-3-portable/fusion">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Fusing</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#p3fes-nav"
                        data-bs-toggle="collapse">
                        <span>Persona 3 FES</span>
                        <span className="material-symbols-outlined bi-chevron-down ms-auto">
                            expand_more
                        </span>
                    </a>
                    <ul id="p3fes-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="components-alerts.html">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Recipe Generator</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="components-accordion.html">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Fusing</span>
                            </Link>
                        </li>
                    </ul>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;
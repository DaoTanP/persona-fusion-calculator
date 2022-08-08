import React from "react";

function Sidebar(props) {
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href="index.html">
                        <span>Home</span>
                    </a>
                </li>

                <li className="nav-heading">Persona 3</li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#p3p-nav"
                        data-bs-toggle="collapse">
                        <span>Persona 3 Portable</span>
                        <span className="material-symbols-outlined bi-chevron-down ms-auto">
                            expand_more
                        </span>
                    </a>
                    <ul
                        id="p3p-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="components-alerts.html">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Recipe Generator</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-accordion.html">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Fusing</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#p3fes-nav" data-bs-toggle="collapse">
                        <span>Persona 3 FES</span>
                        <span className="material-symbols-outlined bi-chevron-down ms-auto">
                            expand_more
                        </span>
                    </a>
                    <ul id="p3fes-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="components-alerts.html">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Recipe Generator</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-accordion.html">
                                <span className="material-symbols-outlined">
                                    fiber_manual_record
                                </span>
                                <span>Fusing</span>
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;
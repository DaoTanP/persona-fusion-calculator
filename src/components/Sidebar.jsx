import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Sidebar(props) {

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <NavLink to="/">Home</NavLink>

                <li className="nav-heading">Persona 3 Portable</li>

                <NavLink to="/persona-3-portable/recipe-generator">Recipe Generator</NavLink>
                <NavLink to="/persona-3-portable/fusion">Fusion</NavLink>

                {/* <li className="nav-item">
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
                </li> */}

                {/* <li className="nav-item">
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
                </li> */}

            </ul>

        </aside>
    );
}

function NavLink(props) {
    const path = useResolvedPath(props.to);
    const isActive = useMatch({
        path: path.pathname,
        end: (props.to === '/'), //match exact path
    })
    // console.log(path.pathname + " " + props.to);

    return (
        <li className="nav-item">
            <Link className={isActive ? "nav-link" : "nav-link collapsed"} to={props.to}>
                <span>{props.children}</span>
            </Link>
        </li>
    );
}
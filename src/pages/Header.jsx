import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    // esse Link redux projects vai parecer com um h1
    return (
        <header className="header">
            <Link className="header__logo" to="/">Redux Projects</Link> 
            <nav>
                <NavLink to="simplecounter">Simple Counter</NavLink>
                <NavLink to="simpleform">Simple Form</NavLink>
                <NavLink to="reduxblog">Redux Blog</NavLink>
            </nav>
        </header>
    )
}
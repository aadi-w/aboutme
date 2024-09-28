import React from "react";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import projects from "../assets/projects.png";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-wrapper">
            <nav>
                <div className="tooltipitem" title="Profile">
                    <Link to="/profile">
                        <img src={profile} alt="Profile" />
                    </Link>
                </div>
                <div className="tooltipitem" title="Home">
                    <Link to="/">
                        <img src={home} alt="Home" />
                    </Link>
                </div>
                <div className="tooltipitem" title="Projects">
                    <Link to="/projects">
                        <img src={projects} alt="Projects" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

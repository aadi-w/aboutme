import React from "react";
import sign from '../assets/sign.png'
import { Link } from "react-router-dom";
import github from '../assets/social/github.png'
import leetcode from '../assets/social/leetcode.png'
// import linkedin from '../assets/social/linkedin.png'

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/" >
                    <img src={sign} alt="" />
                </Link>
            </div>
            <div className="external">
                <a href="https://github.com/aditya-a-wadikar"><img src={github}/></a>
                <a href="https://leetcode.com/u/aditya-a-wadikar/"><img src={leetcode}/></a>
            </div>
        </header>
    );
}

export default Header;

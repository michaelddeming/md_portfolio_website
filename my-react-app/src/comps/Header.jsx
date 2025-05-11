import { Link } from "react-router-dom";

import ( Link)
function Header(){

    const headerTitle = "MICHAEL DEMING";
    const navOption1 = "ABOUT";
    const navOption2 = "BLOG";
    const navOption3 = "PROJECTS";
    const navOption4 = "COMMUNITY";
    return (
    <div className="header">
        <h1 className="header-title">{headerTitle}</h1>

        <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                        
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                        
                    </li>
                    <li>
                        <Link to="/blog">BLOG</Link>
                        
                    </li>
                    <li>
                        <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/community">COMMUNITY</Link>
                    </li>
                   
                </ul>
            </nav>
    </div>
    );
}

export default Header;
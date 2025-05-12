import { Link } from "react-router-dom";

function Header(){

    const headerTitle = "MICHAEL DEMING";
    const navOption1 = "ABOUT";
    const navOption2 = "BLOG";
    const navOption3 = "PROJECTS";
    const navOption4 = "COMMUNITY";
    return (
    <div className="header">
        
            <Link to="/" style={{color:"black", textDecoration:"none"}}><h1 className="header-title">{headerTitle}</h1></Link>
        

        <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/" className="header-page">HOME</Link>
                        
                    </li>
                    <li>
                        <Link to="/about" className="header-page">ABOUT</Link>
                        
                    </li>
                    <li>
                        <Link to="/blog" className="header-page">BLOG</Link>
                        
                    </li>
                    <li>
                        <Link to="/projects" className="header-page">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/community" className="header-page">COMMUNITY</Link>
                    </li>
                   
                </ul>
            </nav>
    </div>
    );
}

export default Header;

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
                        <a href="about.html">{navOption1}</a>
                    </li>
                    <li >
                        <a href="blog.html">{navOption2}</a>
                    </li>
                    <li>
                        <a href="projects.html">{navOption3}
                        </a>
                    </li>
                    <li>
                        <a href="community.html">{navOption4}
                        </a>
                    </li>
                </ul>
            </nav>
    </div>
    );
}

export default Header;
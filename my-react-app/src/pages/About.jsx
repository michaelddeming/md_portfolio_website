import Header from "../comps/Header";
import Card from "../comps/Card";

function About(){
    return(
        <>
        <Header></Header>
        <Card>
        <div className="about-content-main">
        <h2>Hi, I'm Michael 👋</h2>
        <p>I'm a self-taught software engineer and professional formulation chemist with over 3 years of experience working with complex biological systems, including large-scale protein, enzyme, and scheduled material formulations. My background in biotechnology has given me a strong foundation in analytical thinking, data-driven problem solving, and working with highly variable matrix-based systems under rigorous compliance and production constraints.
        </p>
   
        <p>As I've transitioned into tech, I've applied the same discipline to my growth as a programmer. Through independent study, I've completed sections of Harvard's CS50 series and self-taught foundational computer science concepts. I've studied books such as Data Structures and Algorithms in Python, Pro Git, Python Crash Course, and Fluent Python to build a deep, working knowledge of programming principles, version control, and clean code practices.</p>

        <p>Beyond technical skills, my experience also includes cross-disciplinary exposure to business operations and accounting workflows, giving me a unique perspective on how software supports real-world businesses and markets. My projects reflect this blend of science, business, and code, and I regularly share my learning journey through my YouTube channel.</p>


        </div>
        </Card>

        </>
    );
}

export default About;
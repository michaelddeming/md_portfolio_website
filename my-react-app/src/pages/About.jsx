import Header from "../comps/Header";
import Card from "../comps/Card";

function About() {
  return (
    <>
      <Header></Header>
      <Card>
        <div className="about-content-main">
          <h2>Hi, I'm Michael 👋</h2>
          <p>
            I'm a professional formulation chemist with over 3 years of
            experience working with pilot-to-production analytical biological
            systems, including protein, enzyme, and scheduled material
            formulations. My background in biotechnology has given me a strong
            foundation in analytical thinking, data-driven problem solving, and
            working with highly variable matrix-based systems under rigorous
            compliance and production constraints. This passion drove me to an
            independent obsession with computer science and programming.
          </p>

          <p>
            Through my independent study, I've completed sections of Harvard's
            CS50 series and thoroughly studied books such as Data Structures and
            Algorithms in Python, Pro Git, Python Crash Course, and Fluent
            Python to build a working knowledge of programming principles,
            version control, and clean code practices.
          </p>

          <p>
            Beyond technical skills, my experience also includes exposure to
            business operations and accounting workflows, giving perspective on
            how software supports real business operations.
          </p>
        </div>
      </Card>
    </>
  );
}

export default About;

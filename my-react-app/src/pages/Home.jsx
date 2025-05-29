import Header from "../comps/Header";
import WorkExperience from "../comps/WorkExperience";
import Education from "../comps/Education";
import Job from "../comps/Job";
import Degree from "../comps/Degree";
import GitHub from "../comps/GitHub";
import Card from "../comps/Card";
import Position from "../comps/Position";
import DegreeInstitution from "../comps/DegreeInstitution";
import PositionTitleOnly from "../comps/PositionTitleOnly";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="index-content-main">
        <div className="index-content-left">
          <Card>
            <WorkExperience>
              <Job company_name="Birdie Rose Clothes">
                <Position
                  job_title="Software Engineer, Contractor"
                  job_start="Nov. 2024"
                  job_end="Current"
                  job_highlight_1={
                    <p>
                      Engineered a{" "}
                      <b>full-featured GUI retail management system</b> in{" "}
                      <b>Python</b>, incorporating double-entry accounting and
                      automating financial reporting via <b>SQLite3</b>, which{" "}
                      <b>more than doubled</b> the speed of inventory and
                      bookkeeping operations.
                    </p>
                  }
                  job_highlight_2={
                    <p>
                      Reduced financial and inventory lifecycle errors by{" "}
                      <b>over 50%</b> through validation logic and structured
                      data flow.
                    </p>
                  }
                  job_highlight_3={
                    <p>
                      Trained non-technical staff to operate the software and
                      continue to provide support for issue resolution and
                      system maintenance.
                    </p>
                  }
                  job_highlight_4={
                    <p>
                      Open-sourced the Small Business Manager with client
                      approval; serve as <b>project manager</b> for the GitHub
                      repository, overseeing issues, reviewing pull requests,
                      and merging community-driven features and improvements.
                    </p>
                  }
                ></Position>
              </Job>

              <Job company_name="ThermoFisher Scientific">
                <Position
                  job_title="Scientist II, Formulation Chemistry"
                  job_start="Jan. 2024"
                  job_end="Current"
                  job_highlight_1={
                    <p>
                      Lead formulation design/manufacturing for highly sensitive{" "}
                      <b>protein, enzymatic, and serum-based solutions</b>,
                      manually computing and balancing{" "}
                      <b>multi-dimensional matrix arrays</b> to meet stringent
                      analytical concentration target suites.
                    </p>
                  }
                  job_highlight_2={
                    <p>
                      Developed and pitched a business case for automating
                      multi-analyte formulation balancing using{" "}
                      <b>linear programming and the Simplex method</b> to
                      maximize theoretical yield and precision across 10+
                      variable analytical concentration arrays; currently{" "}
                      <b>co-developing a proprietary software tool</b> with the
                      bioinformatics team.
                    </p>
                  }
                  job_highlight_3={
                    <p>
                      Spearheaded development of high-complexity biological
                      controls, contributing to a{" "}
                      <b>MAS Presidential Site Award-winning</b> production of
                      Thermo Fisher's advanced control systems; exceeded
                      business timelines by <b>over 20%.</b>
                    </p>
                  }
                  job_highlight_4={
                    <p>
                      Authored and finalized regulatory documentation including{" "}
                      <b>SOPs, NCARs, Product Variance Reports, and ECOs</b>;
                      led <b>Management of Change (MoC)</b> initiatives focused
                      on automation and operational improvements based on direct
                      experience from active product line work, reducing human
                      error and time waste.
                    </p>
                  }
                ></Position>

                <PositionTitleOnly
                  job_title="Scientist I, Formulation Chemistry"
                  job_start="Jan. 2022"
                  job_end="Dec. 2024"
                ></PositionTitleOnly>
              </Job>
            </WorkExperience>
          </Card>
        </div>

        <div className="index-content-right">
          <Card>
            <Education>
              <Degree
                degree_title="Bachelor of Science"
                degree_major="Human Biology w/ Minor in Chemistry"
              >
                <DegreeInstitution
                  institution_name="Utah State University"
                  institution_city="Logan"
                  institution_state="Utah"
                  graduation_month="December"
                  graduation_year="2021"
                  degree_highlight_desc="Magna Cum Laude"
                ></DegreeInstitution>
              </Degree>
            </Education>
          </Card>
          <Card className="git-hub-card">
            <GitHub></GitHub>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;

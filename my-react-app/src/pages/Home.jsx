import Header from "../comps/Header"
import WorkExperience from "../comps/WorkExperience"
import Education from "../comps/Education";
import Job from "../comps/Job";
import Degree from "../comps/Degree";
import GitHub from "../comps/GitHub";
import Card from "../comps/Card";


function Home() {
  return(
    <>
      <Header></Header>
      <div className="index-content-main">
        
        

        <div className="index-content-left">
        <Card>
                  <WorkExperience>
          <Job
          company_name="Birdie Rose Clothes"
          job_title="Software Engineer, Contractor"
          job_start="Nov. 2024"
          job_end="April 2025"
          job_highlight_1="test"
          job_highlight_2="test"
          job_highlight_3="test"/>
      
          <Job
          company_name="ThermoFisher Scientific"
          job_title="Scientist II, Formulation Chemistry"
          job_start="Jan. 2022"
          job_end="Current"
          job_highlight_1="test"
          job_highlight_2="test"
          job_highlight_3="test"
          />
     
        </WorkExperience>
        <Education>
          <Degree
          degree_title="Bachelor of Science"
          degree_major="Human Biology w/ Minor in Chemistry" 
          institution_name="Utah State University"
          institution_city="Logan"
          institution_state="Utah"
          graduation_month="December"
          graduation_year="2021"
          degree_highlight_desc="Magna Cum Laude"
        />
        </Education>
        </Card>

        </div>

        
        <div className="index-content-right">
          <Card>
            <GitHub></GitHub>
          </Card>
        </div>
      </div>
    </>

  );
}

export default Home;

import Header from "./Header"
import WorkExperience from "./WorkExperience"
import Education from "./Education";
import Job from "./Job";
import Degree from "./Degree";


function App() {
  return(
    <>
      <Header></Header>
      <div className="index-content-main">

        <div className="index-content-left">
        
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
        </div>

        
        <div className="index-content-right">
       
        </div>
      </div>
    </>

  );
}

export default App;

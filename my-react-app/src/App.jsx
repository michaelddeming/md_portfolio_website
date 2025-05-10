import Header from "./Header"
import WorkExperience from "./WorkExperience"
import Education from "./Education";
import Job from "./Job";


function App() {
  return(
    <>
      <Header></Header>
      <div className="index-content-main">

        <div className="index-content-left">
        <WorkExperience>
          <Job
          company_name="ThermoFisher Scientific"
          job_title="Scientist II, Formulation Chemistry"
          job_start="Jan. 2022"
          job_end="Current"
          job_highlight_1="test"
          job_highlight_2="test"
          job_highlight_3="test"
          >
          </Job>
        </WorkExperience>
        <Education></Education>
        
        </div>

        
        <div className="index-content-right">
       
        </div>
      </div>
    </>

  );
}

export default App;

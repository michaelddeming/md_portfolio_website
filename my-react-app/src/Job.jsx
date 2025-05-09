import Position from "./Position";

function Job(props){
    
    return (
         <div className="job">
            <h3>{props.company_name}</h3>
            <Position
                job_title="Scientist II, Formulation Chemistry"
                job_start="January 2024"
                job_end="Current"
                job_highlight_1="Highlight"
                job_highlight_2="Highlight"
                job_highlight_3="Highlight"
            ></Position>
            
         </div>
    );
}

export default Job;
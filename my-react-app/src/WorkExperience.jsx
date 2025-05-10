

function WorkExperience(props){

    return(<>
    <h2>EMPLOYMENT EXPERIENCE</h2>
         <div className="job">
            <h3>{props.company_name}</h3>
                <div className="Position">
                    <p className="job-title"><b>{props.job_title}</b>, <i>{props.job_start} - {props.job_end}</i></p>
                    <ul>
                        <li>
                            {props.job_highlight_1}
                        </li>
                        <li>
                            {props.job_highlight_2}
                        </li>
                        <li>
                            {props.job_highlight_3}
                        </li>
                    </ul>
                </div>
            
         </div>
    </>
    );
}

export default WorkExperience
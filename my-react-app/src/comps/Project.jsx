import { Link } from "react-router-dom";
import Card from "./Card";
        //     project_title=""
        //     project_desc=""
        //     project_languages=""
        //     project_demo_link=""
        //     project_repo_link=""
function Project(props){

    return(
        <>
        <Card>
        <div className="project">
            
                <h2 style={{marginBottom:0}}>{props.project_title}</h2>
                <p style={{marginTop:0}}>{props.project_languages}</p>
                <p>{props.project_desc}</p>
                <iframe className="project-video"
                src={props.project_demo_link}
                width={560}
                frameBorder={0}></iframe>
                <small style={{marginTop:10, textAlign:"right"}}>{props.project_release_date}</small>
        </div>
        </Card>
        </>
    );

}

export default Project;
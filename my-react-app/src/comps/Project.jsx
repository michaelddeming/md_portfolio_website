
        //     project_title=""
        //     project_desc=""
        //     project_languages=""
        //     project_demo_link=""
        //     project_repo_link=""
function Project(props){

    return(
        <>
        <div className="project">
            
                <h2 style={{marginBottom:0}}>{props.project_title}</h2>
                <small style={{marginTop:0}}>{props.project_languages}</small>
                <p className="project-desc">{props.project_desc}</p>
                <a style={{marginBottom:"1rem"}} href={props.website_url}>{props.website_url}</a>
                <iframe className="project-video"
                src={props.project_demo_link}
                width={560}
                frameBorder={0}></iframe>
                <small style={{marginTop:10, textAlign:"right"}}>{props.project_release_date}</small>
        </div>
        </>
    );

}

export default Project;
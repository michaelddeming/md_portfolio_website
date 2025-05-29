//     project_title=""
//     project_desc=""
//     project_languages=""
//     project_demo_link=""
//     project_repo_link=""
function Project(props) {
  return (
    <>
      <div className="project">
        <div className="projects-top">
          <h2 className="project-title">{props.project_title}</h2>
          <small className="project-languages">{props.project_languages}</small>
        </div>
        <p className="project-desc">{props.project_desc}</p>
        {props.website_url}
        <iframe
          className="project-video"
          src={props.project_demo_link}
          width={560}
          frameBorder={0}
        ></iframe>
        <small className="project-release">{props.project_release_date}</small>
      </div>
    </>
  );
}

export default Project;

function WorkExperience(props) {
  return (
    <>
      <div className="work-experience">
        <h2>EMPLOYMENT EXPERIENCE</h2>
        {props.children}
      </div>
    </>
  );
}

export default WorkExperience;

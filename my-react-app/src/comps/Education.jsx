import Degree from "./Degree";

function Education(props) {
  return (
    <>
      <div className="education">
        <h2>EDUCATION</h2>
        {props.children}
      </div>
    </>
  );
}

export default Education;

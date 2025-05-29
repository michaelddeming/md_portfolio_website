function Position(props) {
  return (
    <div className="position">
      <b>{props.job_title}</b> |{" "}
      <i>
        {props.job_start} - {props.job_end}
      </i>
      <ul>
        <li>{props.job_highlight_1}</li>
        <li>{props.job_highlight_2}</li>
        <li>{props.job_highlight_3}</li>
        <li>{props.job_highlight_4}</li>
      </ul>
    </div>
  );
}

export default Position;

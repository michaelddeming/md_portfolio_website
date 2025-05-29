function Degree(props) {
  return (
    <div className="degree">
      <div className="degree-sub">
        <h3>{props.degree_title}</h3>
        <p>{props.degree_major}</p>
      </div>

      {props.children}
    </div>
  );
}

export default Degree;

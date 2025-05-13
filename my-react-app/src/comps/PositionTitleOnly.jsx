function PositionTitleOnly(props) {
    return(
    <div className="position">
        <b>{props.job_title}</b> | <i>{props.job_start} - {props.job_end}</i>
        
</div>
    );
}

export default PositionTitleOnly;
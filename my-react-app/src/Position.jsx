
function Position(props){
    return(
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
    );
}

export default Position;
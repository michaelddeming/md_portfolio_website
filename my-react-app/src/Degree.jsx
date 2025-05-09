
function Degree(props){
    return (
        <div className="degree">
           <h3 style={{display: 'inline' }}>{props.degree_title}</h3>, {props.degree_major}
           <p className="degree-institution">
            <b>{props.institution_name}</b>
            , {props.institution_city}, {props.institution_state}, <i>{props.graduation_month} {props.graduation_year}</i></p>
           <ul>
               <li>
                {props.degree_highlight_desc}
               </li>
           </ul>
        </div>
    );
}

export default Degree;
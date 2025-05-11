

function DegreeInstitution(props){
    return(
        <>
        <div className="degree-institution">
            <b>{props.institution_name}</b>
            , {props.institution_city}, {props.institution_state}, <i>{props.graduation_month} {props.graduation_year}</i>
           <ul>
               <li>
                {props.degree_highlight_desc}
               </li>
           </ul>
        </div>
        </>
        
    );
}
export default DegreeInstitution;

function Job(props){
    return(

        <div className="job">   
            <h3>{props.company_name}</h3>
            {props.children}
        </div>                
    );
}
export default Job;
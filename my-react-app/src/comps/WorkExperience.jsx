

function WorkExperience(props){

    return(<>
    <h2>EMPLOYMENT EXPERIENCE</h2>
         <div className="job">
            {props.children}
         </div>
    </>
    );
}

export default WorkExperience
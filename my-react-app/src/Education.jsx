import Degree from "./Degree"

function Education(){

    return(<>
    <h2>EDUCATION</h2>
        <Degree
        degree_title="Bachelor of Science"
        degree_major="Human Biology w/ Minor in Chemistry" 
        institution_name="Utah State University"
        institution_city="Logan"
        institution_state="Utah"
        graduation_month="December"
        graduation_year="2021"
        degree_highlight_title="Honors"
        degree_highlight_desc="Magna Cum Laude"
        ></Degree>
        

    </>
        
    );
}

export default Education;
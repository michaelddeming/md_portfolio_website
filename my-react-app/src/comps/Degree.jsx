
function Degree(props){
    return (
        
        <div className="degree">
            <div style={{display:"flex", alignItems:"center"}}>
                <h3>{props.degree_title}</h3>, {props.degree_major}
            </div>
           
           {props.children}
        </div>
        
    );
}

export default Degree;
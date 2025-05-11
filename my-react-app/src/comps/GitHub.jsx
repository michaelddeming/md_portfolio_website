import React, {useState} from "react";

function GitHub(){
    const [views, setViews] = useState(0);
    const handleClick = () => {
        window.open('https://github.com/michaelddeming', '_blank');
        setViews(v => v + 1);
    }

    


    return(
        <div className="git-hub">
            <h2>GITHUB</h2>
            <div className="git-hub-btn-container" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <button onClick={handleClick}>Visit Profile</button>
                <p style={{fontSize: "small"}}>Views: {views}</p>
            </div>
            
            
            <p>750+ Contributions in 2025</p>
            <img className="git-hub-cal" src="/imgs/md_2025_github_cal.jpg"></img>
        </div>
    );
}

export default GitHub;
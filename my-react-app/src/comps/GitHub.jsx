
function GitHub(){
    const handleClick = () => {
        window.open('https://github.com/michaelddeming', '_blank');
    } 

    


    return(
        <div className="git-hub">
            
            <div className="git-hub-btn-container" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <h2>GITHUB</h2>
                <button onClick={handleClick}>Visit Profile</button>
            </div>
            
            
            <p>750+ Contributions in 2025</p>
            <img className="git-hub-cal" src="/imgs/md_2025_github_cal.jpg"></img>
        </div>
    );
}

export default GitHub;
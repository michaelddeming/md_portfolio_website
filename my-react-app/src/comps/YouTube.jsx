import { FaYoutube } from 'react-icons/fa';

function YouTube(){

    const handleClick = () => {
        window.open("https://www.youtube.com/@michaeldems", "_blank");
    }
    
    return(
        <>
        <div className="youtube">
             <FaYoutube className="youtube-logo" color="#FF0000" size={75}></FaYoutube>
                <img src="/imgs/youtube.jpg"></img>
                <h2>YouTube Channel</h2>
                <small className="social-stat" style={{margin:0}}>2000+ Subscibers</small>
        
                <p>Subscribe to my YouTube channel, where I livestream daily as I teach myself computer science and programming from the ground up!</p>
                
                   
                <button onClick={handleClick}>View Channel!</button>
                
                
        </div>
        </>
    );
}

export default YouTube;
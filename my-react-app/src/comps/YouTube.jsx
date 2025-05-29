import { FaYoutube } from "react-icons/fa";

function YouTube() {
  const handleClick = () => {
    window.open("https://www.youtube.com/@michaeldems", "_blank");
  };

  return (
    <>
      <div className="youtube">
        <FaYoutube
          className="youtube-logo"
          color="#FF0000"
          size={75}
        ></FaYoutube>
        <img src="/imgs/youtube.jpg"></img>
        <h2>YouTube Channel</h2>
        <small className="social-stat" style={{ margin: 0 }}>
          2200+ Subscribers
        </small>

        <p>
          Subscribe to my YouTube channel, I livestream daily as I teach myself
          computer science and programming!
        </p>

        <button onClick={handleClick}>Visit Channel!</button>
      </div>
    </>
  );
}

export default YouTube;

import { FaLinkedin } from "react-icons/fa";

function LinkedIn() {
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/michael-deming-80814b22a/",
      "_blank"
    );
  };

  return (
    <>
      <div className="linkedin">
        <FaLinkedin
          className="linkedin-logo"
          color="#0A66C2"
          size={75}
        ></FaLinkedin>
        <img src="/imgs/1690517196212-2.jpeg"></img>
        <h2>LinkedIn</h2>
        <small className="social-stat" style={{ margin: 0 }}>
          50+ Connections
        </small>

        <p>
          Connect with me on LinkedIn to follow my journey into tech and
          self-taught computer science. Let's grow together.
        </p>

        <button onClick={handleClick}>Visit Profile!</button>
      </div>
    </>
  );
}

export default LinkedIn;

import { FaDiscord } from "react-icons/fa";

function Discord() {
  const handleClick = () => {
    window.open("https://discord.com/invite/RhNUVyB97g", "_blank");
  };

  return (
    <>
      <div className="discord">
        <FaDiscord
          className="discord-logo"
          color="#5865F2"
          size={75}
        ></FaDiscord>
        <img src="/imgs/discord.jpg"></img>
        <h2>Discord Server</h2>
        <small className="social-stat" style={{ margin: 0 }}>
          575+ Members
        </small>

        <p>
          Join my community discord server to get access to my <i>roadmap</i> of
          study resources for teaching myself computer science and programming!
        </p>

        <button onClick={handleClick}>Join Server!</button>
      </div>
    </>
  );
}

export default Discord;

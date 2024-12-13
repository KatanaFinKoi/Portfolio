import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();
  return (
  <div className = "header">
    <h1>
      Liam Rayback
    </h1>
    <div className = "nav">
      <button onClick={() => navigate("/aboutMe")}>About Me</button>
      <button onClick={() => navigate("/portfolio")}>Portfolio</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/resume")}>Resume</button>
    </div>
  </div>
  );
}

export default Header; 
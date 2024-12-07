import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const Header = () => {
  return (
  <div>
    <h1>
      Liam Rayback
    </h1>
    <nav>
      <ul>
        <li onClick={() => navigate("/aboutMe")}>About Me</li>
        <li onClick={() => navigate("/portfolio")}>Portfolio</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/resume")}>Resume</li>
      </ul>
    </nav>
  </div>
  );
}

export default Header; 
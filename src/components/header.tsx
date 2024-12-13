import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();
  return (
  <div>
    <h1>
      Liam Rayback
    </h1>
    <div>
      <button onClick={() => navigate("/aboutMe")}>About Me</button>
      <button onClick={() => navigate("/portfolio")}>Portfolio</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/resume")}>Resume</button>
    </div>
  </div>
  );
}

// const Header = () => {
//   return (
//   <div>
//     <h1>
//       Liam Rayback
//     </h1>
//       <ul>
//         <li>About Me</li>
//         <li>Portfolio</li>
//         <li>Contact</li>
//         <li>Resume</li>
//       </ul>
//   </div>
//   );
// }

export default Header; 
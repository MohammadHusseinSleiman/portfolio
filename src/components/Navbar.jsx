import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {

  const [ isOpen, setIsOpen ] = useState( false );

  const toggleMenu = () => {
    setIsOpen( !isOpen );
  };

  return (
    <div className="navClass">

      <div className="navLogo">
        <p>Mohammad.dev</p>
      </div>

      <ul className={`navLinks ${isOpen ? "show" : ""}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">My Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>

      <div className="navBtn">
        <Link to="/contact" className="btn">Contact Me</Link>
      </div>
      <div className="navMenuIcon" onClick={ toggleMenu }>
        { isOpen ? "✖" : "☰" }
      </div>

    </div>
  );
}
export default Navbar;
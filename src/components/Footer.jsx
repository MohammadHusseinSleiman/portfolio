import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerClass">

      <div className="footerLogo">
        <p>Mohammad.dev</p>
      </div>

      <ul className="footerLinks">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">My Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>

      <div className="footerSocials">
        <a href="https://github.com/username" target="_blank" rel="noreferrer">🐙 GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        <a href="mailto:yourmail@gmail.com">📧 Email</a>
      </div>

      <div className="footerCopy">
        <p>© 2025 Mohammad.dev – All Rights Reserved</p>
      </div>

    </div>
  );
}
export default Footer;
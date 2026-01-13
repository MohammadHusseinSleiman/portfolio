import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/About.css";

function About() {
    return(
        <>
            <Navbar />

            <div className="aboutClass">

              <h2 className="aboutTitle">About Me</h2>

              <div className="aboutContent">

                <p className="fadeUp">
                  I'm <span className="highlight">Mohammad</span>, a Frontend Developer passionate about 
                  creating modern, interactive, and user-friendly web experiences. 
                  I specialize in <strong>React, JavaScript, and CSS</strong>, and I love 
                  turning ideas into beautiful digital products.
                </p>

                <ul className="aboutList fadeUp">
                  <li>⚡ Skilled in React & modern frontend tools</li>
                  <li>🎨 Focused on clean UI/UX design</li>
                  <li>🚀 Passionate about building interactive experiences</li>
                  <li>🌍 Always learning and exploring new technologies</li>
                </ul>

                <div className="aboutBtn fadeUp">
                  <Link to="/contact">
                    <a href="" className="btn">Contact Me</a>
                  </Link>
                </div>
                
              </div>

            </div>

            <Footer />
        </>
    );
}

export default About;
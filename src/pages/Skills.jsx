import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/skills.css";

function Skills() {
  return (
    <>
        <Navbar />

        <div className="skillsClass" id="skills">
    
          <h2 className="skillsTitle">My Skills</h2>
          <p className="skillsSubtitle">
            Technologies and tools I use to build modern web applications
          </p>
    
          <div className="skillsGrid">
            <div className="skillCard">
              <i className="fab fa-html5"></i>
              <p>HTML5</p>
            </div>
            <div className="skillCard">
              <i className="fab fa-css3-alt"></i>
              <p>CSS3</p>
            </div>
            <div className="skillCard">
              <i className="fab fa-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="skillCard">
              <i className="fab fa-react"></i>
              <p>React</p>
            </div>
            <div className="skillCard">
              <i className="fab fa-node"></i>
              <p>Node.js</p>
            </div>
            <div className="skillCard">
              <i className="fab fa-mysql"></i>
              <p>Mysql</p>
            </div>
          </div>
        </div>

        <Footer />
    </>
  );
}

export default Skills;
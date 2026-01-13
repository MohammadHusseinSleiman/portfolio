import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

function Projects() {

    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio built with React and CSS.",
        demo: "https://mohammadhusseinsleiman.github.io/portfolio/",
        code: "https://github.com/MohammadHusseinSleiman/portfolio"
      }
    ];

    return(
        <>
            <Navbar />

            <div className="projectsClass" id="projects">
              <h2 className="projectsTitle">My Projects</h2>
              <p className="projectsSubtitle">
                A selection of projects I've built to showcase my skills
              </p>

              <div className="projectsGrid">
                {projects.map((project, index) => (
                  <div className="projectCard" key={index}>
                    <div className="projectContent">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="projectBtns">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn">View Demo</a>
                        <a href={project.code} target="_blank" rel="noreferrer" className="btn secondary">View Code</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Footer />
        </>
    );
}
export default Projects;
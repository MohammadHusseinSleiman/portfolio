import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return(
        <>
            <Navbar />
    
            <div className="heroClass">

              <div className="heroContent">

                <h1 className="fadeUp">Hi, I'm <span className="highlight typewriter">Mohammad</span> 👋</h1>

                <p className="fadeUp delay">
                  Frontend Developer passionate about building interactive and modern web experiences.
                </p>

                <div className="heroBtns fadeUp delay2">
                  <Link to="/projects" className="btn">View My Work</Link>
                  <a href="/CV_Mohammad-Sleiman.pdf" rel="noopener noreferrer" className="btn secondary">Download CV</a>
                </div>

              </div>

            </div>

            <Footer />
        </>
    );
}
export default Home;
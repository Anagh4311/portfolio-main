import './style.css'
import about from '../../assets/img/about.jpg'

function About() {
    return (
        <section name='About' id="aboutSec" className="about-section">

            <div className="about">
                <h2 className="about-heading">ABOUT ME</h2>
                <p className="para-ab">A dedicated Front-end Developer 😎</p>
            </div>

            <div className="about-content">
                <div className="about-img">
                    <img src={about} alt="About Me" />
                </div>

                <div className="about-text">
                    <p>As a Front-End Developer, I possess an impressive arsenal of
                        skills in HTML, CSS and JavaScript. I excel in designing and
                        maintaining responsive websites that offer a smooth user
                        experience. My expertise lies in crafting dynamic, engaging
                        interfaces through writing clean and optimized code and
                        utilizing cutting-edge development tools and techniques. I
                        am also a team player who thrives in collaborating with
                        cross-functional teams to produce outstanding web
                        applications.</p>
                </div>
            </div>
        </section>
    )
}

export default About

import ProjectCard from '../ProjectCard';
import './style.css';
import eventImg from '../../assets/project-img/event.jpg';
import weatherImg from '../../assets/project-img/weather.png';
import ecommerceImg from '../../assets/project-img/ecommerce.png';
import mistoreImg from '../../assets/project-img/mistore.png';

const ProjectContainer = () => {
    const projects = [
        {
            img: mistoreImg,
            heading: 'MiStore-WebApp 💻 ',
            des: "The MiStore app, crafted with HTML, CSS, and ReactJS, offers lightning-fast performance and seamless user experience. Featuring dynamic content rendering and multi-language support, it caters to diverse audiences worldwide. With customizable themes and responsive design, MiStore delivers a versatile and engaging e-commerce platform. A testament to proficiency in React development.",
            tech: ['React', 'CSS3'],
            CodeLink: 'https://github.com/Anagh4311/MiStore-WebApp',
            LiveDemoLink: 'https://anagh4311.github.io/MiStore-WebApp/',
            id: 3,
        },
        {
            img: eventImg,
            heading: 'Event Organizing Websites',
            des: 'Event organizing website, built with HTML, CSS, and JavaScript, provides seamless user experience and dynamic functionality. With intuitive navigation and responsive design, it enhances event planning with speed and versatility, catering to diverse needs.',
            tech: ['HTML5', 'CSS3', 'JavaScript','Bootstrap'],
            CodeLink: 'https://github.com/Anagh4311/event-organise-webites',
            LiveDemoLink: 'https://anagh4311.github.io/event-organise-webites/',
            id: 4,
        },
        {
            img: weatherImg,
            heading: 'Weather App 🌞',
            des: "Developed a dynamic weather app powered by OpenWeather API, providing real-time data, global coverage, a 7-day forecast, and location-based tracking. Offering users a seamless experience for up-to-date weather insights worldwide, it highlights my expertise in API integration and user-friendly app design.",
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            CodeLink: 'https://github.com/Anagh4311/Weather-App',
            LiveDemoLink: 'https://anagh4311.github.io/Weather-App/',
            id: 6,
        },
        {
            img: ecommerceImg,
            heading: 'E-commerce Website 🛍️',
            des: "Crafted with HTML, CSS, and JavaScript, our cloth ecommerce website offers seamless shopping experience and dynamic features. With intuitive navigation and responsive design, it caters to diverse fashion preferences. Featuring customizable themes and multi-language support, it enhances accessibility and personalization.",
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            CodeLink: 'https://github.com/Anagh4311/Ecommerce_website',
            LiveDemoLink: 'https://anagh4311.github.io/Ecommerce_website/',
            id: 5,
        }
    ];

    return (
        <section name="Project" className="projects-container">
            <div className="project-head">
                <h3>PORTFOLIO</h3>
                <h1>Each project is a unique piece of development 🧩</h1>
            </div>
            {projects.map((project, ind) => <ProjectCard key={ind} project={project} />)}
        </section>
    );
};

export default ProjectContainer;

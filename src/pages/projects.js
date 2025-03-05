import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';
import { marked } from 'marked';

const projects = [
  { 
    title: "Event Tracker", 
    description: "A web application that allows users to create, manage, and track events. Features include user authentication, event creation, and RSVP functionality.", 
    image: "/images/eventTracker.png",
    github: "https://github.com/a-mwen/EventTracker-project", 
    tech: "PHP, JavaScript, HTML, CSS, PostgreSQL, PDO, Chart.js"
  },
  { 
    title: "Portfolio Website", 
    description: "A personal portfolio website designed to showcase skills, projects, and accomplishments. Fully responsive and optimized for both desktop and mobile views.", 
    image: "/images/portfolio.png", 
    github: "#", 
    tech: "HTML, CSS, JavaScript, React" 
  },
  { 
    title: "Interactive 3D Globe", 
    description: "A WebGL-based interactive globe showing various global data points in real-time.", 
    image: "https://static.turbosquid.com/Preview/2015/09/01__08_03_12/8k.jpgcc32babc-700f-4e83-a4c7-34c6ccb97a9fOriginal.jpg", 
    github: "https://github.com/a-mwen/interactive-globe-project", 
    tech: "JavaScript, WebGL, Three.js", 
    liveDemo: "https://interactive-globe-project-2j6lozqyy-ashers-projects-2cc47492.vercel.app/" 
  },
  { 
    title: "Azure AD B2C Authentication App", 
    description: "This project demonstrates secure authentication using Azure AD B2C, a cloud-based identity management service from Microsoft. Built with React.js and Node.js, the app enables users to sign in and register via a Microsoft account with OAuth 2.0 authentication. The project showcases frontend and backend integration, user profile management, and the implementation of secure authentication flows.", 
    image: "/images/azure-ad-b2c.png", 
    github: "https://github.com/a-mwen/azure-auth-repo", 
    tech: "React, Azure AD B2C, MSAL.js, CSS",
    liveDemo: "https://azure-auth-repo.vercel.app/" 
  },
  { 
    title: "Task Management App", 
    description: "A React Native-based task management app that helps users organize and prioritize their daily tasks with notifications and a sleek UI.", 
    image: "/path/to/task.jpg", 
    github: "#", 
    tech: "React Native, Redux" 
  },
  { 
    title: "Simple Calculator App", 
    description: "A simple web-based calculator that allows users to perform basic arithmetic operations with a clean and responsive UI.", 
    image: "/images/calculator.png", 
    github: "https://github.com/a-mwen/calculator-app", 
    tech: "HTML, CSS, JavaScript" 
  },
  { 
    title: "Weather App", 
    description: "A weather application that fetches real-time weather data based on user input and displays temperature, humidity, and conditions.", 
    image: "/images/weather-app.png", 
    github: "https://github.com/a-mwen/weather-app", 
    tech: "JavaScript, OpenWeather API, HTML, CSS" 
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach(shape => {
      gsap.to(shape, {
        x: () => Math.random() * window.innerWidth - 50,
        y: () => Math.random() * window.innerHeight - 50,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });

    // Animate project cards on load
    gsap.fromTo(".project-card", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    gsap.fromTo(".modal", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
  };

  const closeModal = () => {
    gsap.to(".modal", { opacity: 0, y: 50, duration: 0.5, onComplete: () => setSelectedProject(null) });
  };

  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />
      <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
        <div className="mb-8 mt-16 w-full text-center">
          <h1 className="text-center text-4xl font-bold text-green mb-12">PROJECTS</h1>

          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex-shrink-0"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                <p className="text-lg">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="modal bg-white p-8 rounded-lg text-navy max-h-full w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 relative shadow-2xl overflow-y-auto">
              <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={closeModal}>✕</button>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <p className="text-lg font-bold mb-2">Technologies Used: {selectedProject.tech}</p>
              <a href={selectedProject.github} className="text-blue-400 hover:underline mb-4 block" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              {selectedProject.liveDemo && (
                <a href={selectedProject.liveDemo} className="text-blue-400 hover:underline mb-4 block" target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        )}

        {/* Animated Shapes in Background */}
        <div className="shape shape-one w-40 h-40 bg-green-500 opacity-40 rounded-full absolute top-0 right-10 filter blur-lg"></div>
        <div className="shape shape-two w-52 h-52 bg-purple-500 opacity-40 rounded-full absolute bottom-0 left-10 filter blur-lg"></div>
        <div className="shape shape-three w-44 h-44 bg-yellow-500 opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      </main>
    </div>
  );
}
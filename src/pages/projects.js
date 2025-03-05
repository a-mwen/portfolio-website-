import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';

const projects = [
  { 
    title: "Event Tracker", 
    description: "A web application that allows users to create, manage, and track events. Features include user authentication, event creation, and RSVP functionality.", 
    screenshot: "/images/eventTracker.png", 
    github: "https://github.com/a-mwen/EventTracker-project", 
    tech: "PHP, JavaScript, HTML, CSS, PostgreSQL, PDO, Chart.js"
  },
  { 
    title: "Portfolio Website", 
    description: "A personal portfolio website designed to showcase skills, projects, and accomplishments. Fully responsive and optimized for both desktop and mobile views.", 
    screenshot: "/images/portfolio.png", 
    github: "https://www.ashamweene.fyi/", 
    tech: "HTML, CSS, JavaScript, React"
  },
  { 
    title: "Interactive 3D Globe", 
    description: "A WebGL-based interactive globe showing various global data points in real-time.", 
    screenshot: "https://static.turbosquid.com/Preview/2015/09/01__08_03_12/8k.jpgcc32babc-700f-4e83-a4c7-34c6ccb97a9fOriginal.jpg", 
    github: "https://github.com/a-mwen/interactive-globe-project", 
    tech: "JavaScript, WebGL, Three.js"
  },
  { 
    title: "Azure AD B2C Authentication App", 
    description: "This project demonstrates secure authentication using Azure AD B2C, enabling users to sign in and register via a Microsoft account with OAuth 2.0 authentication.", 
    screenshot: "/images/azure-ad-b2c.png", 
    github: "https://github.com/a-mwen/azure-auth-repo", 
    tech: "React, Azure AD B2C, MSAL.js, CSS"
  },
  { 
    title: "Task Management App", 
    description: "A React Native-based task management app that helps users organize and prioritize their daily tasks.", 
    screenshot: "/path/to/task.jpg", 
    github: "https://github.com/a-mwen/task-manager-app", 
    tech: "React Native, Redux"
  },
  { 
    title: "CNN Image Classification", 
    description: "A machine learning model that classifies images into different categories using Convolutional Neural Networks (CNN).", 
    screenshot: "https://media.geeksforgeeks.org/wp-content/uploads/20230215093923/CNN-Architectures-1.png", 
    github: "https://github.com/a-mwen/-image-classification", 
    tech: "Python, TensorFlow, Keras"
  },
  { 
    title: "Simple Calculator App", 
    description: "A simple web-based calculator that allows users to perform basic arithmetic operations with a clean and responsive UI.", 
    screenshot: "/images/calculator.png", 
    github: "https://github.com/a-mwen/calculator-app", 
    tech: "HTML, CSS, JavaScript"
  },
  { 
    title: "Weather App", 
    description: "A weather application that fetches real-time weather data based on user input and displays temperature, humidity, and conditions.", 
    screenshot: "/images/weather-app.png", 
    github: "https://github.com/a-mwen/weather-app", 
    tech: "JavaScript, OpenWeather API, HTML, CSS"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.fromTo(".project-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 });
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

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item bg-gray-800 p-6 rounded-lg flex flex-col items-center gap-4 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.screenshot} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-2xl font-bold text-center mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                <p className="text-lg text-center">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="modal bg-white p-8 rounded-lg text-navy max-h-full w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 relative shadow-2xl overflow-y-auto">
              <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={closeModal}>✕</button>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="mb-4 text-lg">{selectedProject.description}</p>
              <p className="text-sm text-gray-500 mb-2">{selectedProject.tech}</p>
              <a href={selectedProject.github} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

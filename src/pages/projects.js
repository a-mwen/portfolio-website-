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
    tech: "PHP, JavaScript, HTML, CSS, PostgreSQL, PDO, Chart.js",
    liveDemo: "https://event-tracker-live-demo.com"
  },
  { 
    title: "Portfolio Website", 
    description: "A personal portfolio website designed to showcase skills, projects, and accomplishments. Fully responsive and optimized for both desktop and mobile views.", 
    screenshot: "/images/portfolio.png", 
    github: "https://www.ashamweene.fyi/", 
    tech: "HTML, CSS, JavaScript, React",
    liveDemo: "https://www.ashamweene.fyi/"
  },
  { 
    title: "Interactive 3D Globe", 
    description: "A WebGL-based interactive globe showing various global data points in real-time.", 
    screenshot: "https://static.turbosquid.com/Preview/2015/09/01__08_03_12/8k.jpgcc32babc-700f-4e83-a4c7-34c6ccb97a9fOriginal.jpg", 
    github: "https://github.com/a-mwen/interactive-globe-project", 
    tech: "JavaScript, WebGL, Three.js", 
    liveDemo: "https://interactive-globe-project-2j6lozqyy-ashers-projects-2cc47492.vercel.app/"
  },
  { 
    title: "Azure AD B2C Authentication App", 
    description: "This project demonstrates secure authentication using Azure AD B2C, a cloud-based identity management service from Microsoft. Built with React.js and Node.js, the app enables users to sign in and register via a Microsoft account with OAuth 2.0 authentication. The project showcases frontend and backend integration, user profile management, and the implementation of secure authentication flows.", 
    screenshot: "/images/azure-ad-b2c.png", 
    github: "https://github.com/a-mwen/azure-auth-repo", 
    tech: "React, Azure AD B2C, MSAL.js, CSS",
    liveDemo: "https://azure-auth-repo.vercel.app/"
  },
  { 
    title: "Task Management App", 
    description: "A React Native-based task management app that helps users organize and prioritize their daily tasks with notifications and a sleek UI.", 
    screenshot: "/path/to/task.jpg", 
    github: "https://github.com/a-mwen/task-manager-app", 
    tech: "React Native, Redux",
    liveDemo: "https://task-manager-app-alpha-drab.vercel.app/"
  },
  { 
    title: "CNN Image Classification", 
    description: "A machine learning model that classifies images into different categories using Convolutional Neural Networks (CNN) for accuracy.", 
    screenshot: "https://media.geeksforgeeks.org/wp-content/uploads/20230215093923/CNN-Architectures-1.png", 
    github: "https://github.com/a-mwen/-image-classification", 
    tech: "Python, TensorFlow, Keras",
    liveDemo: null
  },
  { 
    title: "Simple Calculator App", 
    description: "A simple web-based calculator that allows users to perform basic arithmetic operations with a clean and responsive UI.", 
    screenshot: "/images/calculator.png", 
    github: "https://github.com/a-mwen/calculator-app", 
    tech: "HTML, CSS, JavaScript",
    liveDemo: "https://calculator-app-live-demo.com"
  },
  { 
    title: "Weather App", 
    description: "A weather application that fetches real-time weather data based on user input and displays temperature, humidity, and conditions.", 
    screenshot: "/images/weather-app.png", 
    github: "https://github.com/a-mwen/weather-app", 
    tech: "JavaScript, OpenWeather API, HTML, CSS",
    liveDemo: "https://weather-app-live-demo.com"
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

    // Animate project items on load
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

          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item bg-gray-800 p-6 rounded-lg flex flex-col items-center gap-6 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image or Screenshot */}
                <div className="w-full">
                  <img src={project.screenshot} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                </div>

                {/* Project Details */}
                <div className="w-full text-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                  <p className="text-lg mb-4">{project.description}</p>

                  {/* Live Demo Link */}
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 text-blue-500 hover:text-blue-400"
                    >
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="modal bg-white p-8 rounded-lg text-navy max-h-full w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 relative shadow-2xl overflow-y-auto">
              <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={closeModal}>✕</button>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              
              {/* Live Demo Iframe */}
              {selectedProject.liveDemo && (
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Live Demo</h3>
                  <iframe
                    src={selectedProject.liveDemo}
                    className="w-full h-64 md:h-96 rounded-md border border-gray-300"
                    title={`${selectedProject.title} Live Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
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

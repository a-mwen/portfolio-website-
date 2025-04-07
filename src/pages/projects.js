import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';
import { marked } from 'marked';

const categories = {
  "Web Applications": [
    {
      title: "Task Management App",
      description: "A full-stack task management application with drag-and-drop functionality, supporting task creation, editing, and prioritization.",
      screenshot: "images/task_manager.png",
      github: "https://github.com/a-mwen/task-manager-app",
      tech: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Material-UI",
        "Framer Motion",
        "React Beautiful DnD"
      ],
      liveDemo: "https://task-manager-app-alpha-drab.vercel.app/",
      detailedDescription: `
### Key Features
- **Dynamic Task Management**: Add, edit, and delete tasks with ease
- **Drag-and-Drop Reordering**: Intuitive task organization
- **Priority Levels**: Color-coded priority system (Low, Medium, High)
- **Responsive Design**: Seamless experience across devices

### Technical Highlights
- Implemented full-stack application with React frontend and Node.js/Express backend
- Utilized PostgreSQL for robust data persistence
- Integrated Material-UI for sleek, modern design
- Employed Framer Motion for smooth animations
- Implemented React Beautiful DnD for interactive task reordering

### Challenges Overcome
- Developed complex state management for real-time task updates
- Created responsive design that works across multiple device sizes
- Implemented efficient backend routes for CRUD operations
`
    },
    { 
      title: "Event Tracker", 
      description: "A web application for creating, managing, and tracking events with user authentication and RSVP functionality.", 
      screenshot: "/images/eventTracker.png", 
      github: "https://github.com/a-mwen/EventTracker-project", 
      tech: [
        "PHP", 
        "JavaScript", 
        "HTML", 
        "CSS", 
        "PostgreSQL", 
        "PDO", 
        "Chart.js"
      ],
      liveDemo: "https://vimeo.com/1038020808?share=copy",
      detailedDescription: `
### Project Features
- User authentication and authorization
- Event creation and management
- RSVP tracking and participation analytics
- Data visualization with Chart.js

### Technical Highlights
- Implemented full-stack web application using PHP
- Created robust database interactions with PDO
- Developed interactive user interfaces
- Integrated data visualization for event insights

### Challenges Overcome
- Implemented secure user authentication
- Created complex database relationships
- Developed responsive and interactive UI
`
    },
    { 
      title: "Portfolio Website", 
      description: "A personal portfolio website showcasing skills, projects, and professional achievements with responsive design.", 
      screenshot: "/images/portfolio.png", 
      github: "https://www.github.com/a-mwen/portfolio", 
      tech: [
        "React",
        "Tailwind CSS", 
        "GSAP", 
        "Responsive Design",
        "Modern Web Technologies"
      ],
      liveDemo: "https://www.ashamweene.fyi/",
      detailedDescription: `
### Key Features
- Responsive and interactive portfolio design
- Animated user interface with GSAP
- Comprehensive project showcase
- Modern, clean aesthetic

### Technical Implementation
- Utilized React for component-based architecture
- Implemented Tailwind CSS for responsive styling
- Created smooth animations and interactions
- Demonstrated front-end development best practices

### Design Considerations
- Mobile-first approach
- Accessibility-focused design
- Performance-optimized rendering
`
    }
  ],
  "Progressive Web Apps & Mobile": [
    { 
      title: "Color Palette Generator PWA", 
      description: "A professional color palette generator built as a Progressive Web App with offline functionality and installable capabilities.", 
      screenshot: "/images/color-palette-pwa.png", 
      github: "https://github.com/a-mwen/color-palette-generator-pwa", 
      tech: [
        "HTML5", 
        "CSS3", 
        "JavaScript", 
        "PWA", 
        "Service Workers",
        "Azure DevOps"
      ],
      liveDemo: "https://gray-island-01a1d8e10.4.azurestaticapps.net/",
      detailedDescription: `
### Key Features
- **Multiple Palette Types**: Generate random, monochromatic, analogous, or complementary color schemes
- **Color Information**: View color codes in HEX, RGB, and HSL formats
- **One-Click Copying**: Copy color codes to your clipboard with a single click
- **Palette History**: Access your recently generated color palettes
- **Offline Support**: Works even without an internet connection
- **Installable**: Add to your home screen as a standalone application

### Technical Highlights
- Implemented Progressive Web App capabilities
- Created service worker for offline functionality
- Used local storage for persistent palette history
- Deployed using Azure DevOps CI/CD pipeline
- Implemented responsive design for all device sizes

### Development Process
- Designed interface focused on usability and aesthetics
- Implemented color theory algorithms for palette generation
- Created PWA manifest for installable experience
- Configured GitHub and Azure DevOps integration for streamlined deployment
`
    },
    { 
      title: "Azure AD B2C Authentication App", 
      description: "Secure authentication application using Microsoft's cloud-based identity management service.", 
      screenshot: "/images/azure-ad-b2c.png", 
      github: "https://github.com/a-mwen/azure-auth-repo", 
      tech: [
        "React", 
        "Azure AD B2C", 
        "MSAL.js", 
        "CSS"
      ],
      liveDemo: "https://azure-auth-repo-git-main-ashers-projects-2cc47492.vercel.app/",
      detailedDescription: `
### Authentication Features
- Implemented secure Microsoft account authentication
- Utilized OAuth 2.0 authentication protocol
- Created robust user authentication flow

### Technical Implementation
- Integrated Azure AD B2C with React frontend
- Implemented secure token management
- Created seamless login/logout experience
`
    }
  ],
  "Cloud & DevOps": [
    { 
      title: "Azure Node.js Deployment Project", 
      description: "A project demonstrating automated deployment of a Node.js application to Azure using GitHub Actions for CI/CD.", 
      screenshot: "/images/azure-node-deployment.png", 
      github: "https://github.com/a-mwen/azure-node-app", 
      tech: [
        "Node.js", 
        "Azure Web App", 
        "GitHub Actions", 
        "Azure CLI",
        "CI/CD Pipeline"
      ],
      liveDemo: null,
      detailedDescription: `
### Project Overview
This project demonstrates how to deploy a Node.js application to Azure using **GitHub Actions** for CI/CD. The project is automatically built and deployed to an Azure Web App every time changes are pushed to the \`main\` branch.

### Technical Features
- **CI/CD Pipeline**: Automated build and deployment process using GitHub Actions
- **Live Deployment**: The application is hosted on Azure, making it accessible via the web
- **DevOps Workflow**: Demonstrates modern DevOps practices for application deployment
- **Infrastructure as Code**: Configuration managed through version control

### Development Process
- Set up Node.js application and tested locally
- Created GitHub Actions workflow for CI/CD pipeline
- Configured Azure Web App for hosting
- Implemented automated testing before deployment
- Set up continuous deployment from GitHub to Azure
`
    }
  ],
  "Data & Visualization": [
    { 
      title: "Interactive 3D Globe", 
      description: "A WebGL-based interactive globe visualizing global data points in real-time.", 
      screenshot: "https://static.turbosquid.com/Preview/2015/09/01__08_03_12/8k.jpgcc32babc-700f-4e83-a4c7-34c6ccb97a9fOriginal.jpg", 
      github: "https://github.com/a-mwen/interactive-globe-project", 
      tech: [
        "JavaScript", 
        "WebGL", 
        "Three.js"
      ], 
      liveDemo: "https://interactive-globe-project-2j6lozqyy-ashers-projects-2cc47492.vercel.app/",
      detailedDescription: `
### Project Overview
- Created an interactive 3D globe visualization using advanced WebGL techniques
- Implemented real-time data rendering and user interaction
- Demonstrated proficiency in 3D graphics programming

### Technical Challenges
- Developed complex WebGL rendering techniques
- Implemented smooth user interactions with 3D object
- Optimized performance for complex graphical rendering
`
    }
  ],
  "Artificial Intelligence": [
    { 
      title: "Machine Learning Image Classifier", 
      description: "Convolutional Neural Network for accurate image classification.", 
      screenshot: "https://media.geeksforgeeks.org/wp-content/uploads/20230215093923/CNN-Architectures-1.png", 
      github: "https://github.com/a-mwen/-image-classification", 
      tech: [
        "Python", 
        "TensorFlow", 
        "Keras",
        "Machine Learning"
      ],
      liveDemo: null,
      detailedDescription: `
### Machine Learning Achievements
- Developed CNN model for precise image classification
- Implemented advanced deep learning techniques
- Demonstrated proficiency in machine learning algorithms

### Technical Depth
- Used TensorFlow and Keras for model development
- Implemented data preprocessing and augmentation
- Achieved high accuracy through sophisticated neural network architecture
`
    }
  ]
};

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

    gsap.fromTo(".category-title", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 });
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

          {Object.keys(categories).map((category) => (
            <div key={category} className="mb-16 text-center">
              <h2 className="category-title text-3xl font-bold text-light-slate mb-6">{category}</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {categories[category].map((project, index) => (
                  <div
                    key={index}
                    className="project-card bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex-shrink-0" 
                    onClick={() => handleProjectClick(project)}
                  >
                    <img src={project.screenshot} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{project.tech.join(", ")}</p>
                    <p className="text-lg">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="modal bg-white p-8 rounded-lg text-navy max-h-full w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 relative shadow-2xl overflow-y-auto">
              <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={closeModal}>✕</button>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.screenshot} alt={selectedProject.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <p className="text-lg font-bold mb-2">Technologies Used:</p>
              <ul className="list-disc pl-6 mb-4">
                {selectedProject.tech.map((tech, index) => (
                  <li key={index} className="text-lg">{tech}</li>
                ))}
              </ul>
              <a href={selectedProject.github} className="text-blue-400 hover:underline mb-4 block" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              {selectedProject.liveDemo && (
                <a href={selectedProject.liveDemo} className="text-blue-400 hover:underline mb-4 block" target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
              {selectedProject.detailedDescription && (
                <div className="bg-gray-200 p-4 rounded-lg text-left mb-4">
                  <h3 className="text-xl font-bold mb-2">Detailed Description</h3>
                  <span dangerouslySetInnerHTML={{ __html: marked(selectedProject.detailedDescription) }} className="text-gray-700"></span>
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
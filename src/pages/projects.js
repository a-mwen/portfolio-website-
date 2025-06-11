import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';
import { marked } from 'marked';

const categories = {
  "Web Applications": [
    {
      title: "Task Management App",
      description: "Drag-and-drop task management with prioritization and responsive design, ideal for remote teams.",
      screenshot: "images/task_manager.png",
      github: "https://github.com/a-mwen/task-manager-app",
      tech: [
        "React", "Node.js", "Express", "PostgreSQL", "Material-UI", "Framer Motion", "React Beautiful DnD"
      ],
      liveDemo: "https://task-manager-app-alpha-drab.vercel.app/",
      detailedDescription: `
### What It Does
A task planner for managing workflows, prioritizing work, and collaborating visually.

### Technical Stack
- Full-stack architecture with React frontend and Express backend
- PostgreSQL for persistent data storage
- Styled with Material-UI, animations via Framer Motion

### Impact
- Built for performance and ease-of-use across devices
- Solves real-time task updates and visual task sorting

### Role Relevance
Great for showcasing full-stack and UI/UX design skills
`
    },
    {
      title: "Event Tracker",
      description: "Manage and visualize event RSVPs with login, database logic, and real-time stats.",
      screenshot: "/images/eventTracker.png",
      github: "https://github.com/a-mwen/EventTracker-project",
      tech: [
        "PHP", "JavaScript", "HTML", "CSS", "PostgreSQL", "PDO", "Chart.js"
      ],
      liveDemo: "https://vimeo.com/1038020808?share=copy",
      detailedDescription: `
### What It Does
Users can log in, create events, and track attendance with visual insights.

### Technical Stack
- PHP with PDO for backend
- Chart.js for visual RSVP tracking
- Auth system with session handling

### Role Relevance
Good for backend-heavy or data-centric developer roles
`
    },
    {
      title: "Portfolio Website",
      description: "Interactive developer portfolio built with React, GSAP animations, and Tailwind for modern responsive design.",
      screenshot: "/images/portfolio.png",
      github: "https://www.github.com/a-mwen/portfolio",
      tech: [
        "React", "Tailwind CSS", "GSAP", "Responsive Design"
      ],
      liveDemo: "https://www.ashamweene.fyi/",
      detailedDescription: `
### What It Does
A sleek developer portfolio that showcases skills, design sense, and personal brand.

### Technical Stack
- React and Tailwind for responsive layout
- GSAP for smooth animations
- Optimized for accessibility and performance

### Role Relevance
Great for front-end and UI-focused positions
`
    }
  ],
  "Progressive Web Apps & Mobile": [
    {
      title: "Color Palette Generator PWA",
      description: "Offline-first, installable color palette generator app with copy-to-clipboard and palette history features.",
      screenshot: "/images/spectrum.png",
      github: "https://github.com/a-mwen/color-palette-generator-pwa",
      tech: [
        "HTML5", "CSS3", "JavaScript", "PWA", "Service Workers", "Azure DevOps"
      ],
      liveDemo: "https://proud-river-0e464db1e-preview.westus2.6.azurestaticapps.net/",
      detailedDescription: `
### What It Does
Designers and devs can generate, store, and copy color palettes across multiple schemes.

### Technical Stack
- Vanilla JS + PWA + Azure DevOps CI/CD
- Local storage for offline support

### Role Relevance
Strong for UI dev, PWA/mobile-first devs
`
    },
    {
      title: "Azure AD B2C Authentication App",
      description: "OAuth-based secure login system built with Microsoft's cloud-based identity platform.",
      screenshot: "/images/azure-ad-b2c.png",
      github: "https://github.com/a-mwen/azure-auth-repo",
      tech: [
        "React", "Azure AD B2C", "MSAL.js", "CSS"
      ],
      liveDemo: "https://azure-auth-repo-git-main-ashers-projects-2cc47492.vercel.app/",
      detailedDescription: `
### What It Does
Secure app login using Microsoft authentication with OAuth 2.0 protocol.

### Technical Stack
- React with Azure AD B2C
- Token handling via MSAL.js

### Role Relevance
Cloud, security, and identity-focused projects
`
    }
  ],
  "Cloud & DevOps": [
    {
      title: "Azure CI/CD Pipeline with GitHub Actions",
      description: "Automated deployment pipeline for Node.js applications using GitHub Actions and Azure Web Services.",
      screenshot: "https://docs.microsoft.com/en-us/azure/devops/media/index/devopsiconpipelines96.svg?view=azure-devops",
      github: "https://github.com/a-mwen/azure-node-app",
      tech: [
        "Node.js", "Azure Web App", "GitHub Actions", "Azure CLI", "CI/CD Pipeline", "YAML"
      ],
      liveDemo: null,
      detailedDescription: `
### What It Does
Demonstrates enterprise-level deployment automation from GitHub to Azure using Infrastructure as Code principles.

### Technical Stack
- Node.js backend with Express framework
- GitHub Actions for continuous integration and deployment
- Azure Web App Service for cloud hosting
- YAML configuration for pipeline automation

### Key Features
- Automated build process on every commit
- Zero-downtime deployments
- Environment variable management
- Rollback capabilities

### Role Relevance
Perfect for DevOps Engineer, Cloud Engineer, and Full-Stack Developer positions focusing on deployment automation
`
    }
  ],
  "Data & Visualization": [
    {
      title: "Interactive 3D Globe",
      description: "WebGL globe that displays global data points with smooth camera and data interactions.",
      screenshot: "https://static.turbosquid.com/Preview/2015/09/01__08_03_12/8k.jpgcc32babc-700f-4e83-a4c7-34c6ccb97a9fOriginal.jpg",
      github: "https://github.com/a-mwen/interactive-globe-project",
      tech: [
        "JavaScript", "WebGL", "Three.js"
      ],
      liveDemo: "https://interactive-globe-project-2j6lozqyy-ashers-projects-2cc47492.vercel.app/",
      detailedDescription: `
### What It Does
3D globe app for rendering data across countries in real-time.

### Tech Stack
- Three.js + WebGL for 3D visuals
- Real-time data plotting

### Role Relevance
Strong for front-end engineers focused on data viz or interaction design
`
    },
    {
      title: "CardTrack: Trading Card Marketplace & Analytics",
      description: "A web platform for trading card enthusiasts to buy, sell, and analyze card values using real-time data.",
      screenshot: "/images/cardtrack.png",
      github: "https://github.com/a-mwen/CardTrack-Marketplace",
      tech: [
        "JavaScript", "Node.js", "Express", "MySQL", "Chart.js", "Bootstrap"
      ],
      liveDemo: "https://cardtrack.vercel.app",
      detailedDescription: `
### What It Does
Users can post, browse, and analyze card listings. Includes price trends, rarity filters, and analytics dashboard.

### Technical Stack
- Backend in Node.js + MySQL
- Chart.js for market analytics
- Frontend built with Bootstrap & custom JS

### Role Relevance
Excellent for full-stack and data roles
`
    }
  ],
  "Artificial Intelligence & Machine Learning": [
    {
      title: "AI Resume Screener & Job Category Predictor",
      description: "End-to-end AI system that analyzes resumes and predicts job categories using NLP and machine learning with 90%+ accuracy.",
      screenshot: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/a-mwen/resume-ai-scanner", // Update with your actual GitHub repo
      tech: [
        "Python", "Streamlit", "Flask", "NLTK", "Scikit-learn", "TF-IDF", "Naive Bayes", "NLP", "REST API"
      ],
      liveDemo: "https://resume-ai-scanner.streamlit.app/",
      detailedDescription: `
### What It Does
An intelligent resume screening system that automatically categorizes resumes into job roles like Software Engineer, Data Scientist, HR, Marketing, and more. Supports both PDF uploads and manual text input with confidence scoring.

### Technical Stack
- **Frontend**: Streamlit web application deployed on Streamlit Cloud
- **Backend**: Flask REST API for scalable integration
- **ML Pipeline**: TF-IDF vectorization + Multinomial Naive Bayes classifier
- **NLP Processing**: Tokenization, lemmatization, and text preprocessing with NLTK

### Key Features
- Multi-format resume upload (PDF/Text)
- Top-3 job category predictions with confidence scores
- Real-time processing and transparent AI decision-making
- RESTful API for enterprise integration

### Impact
- Reduces manual resume screening time by 80%
- Achieves 90%+ accuracy in job category prediction
- Scalable architecture supporting high-volume processing

### Role Relevance
Ideal for ML Engineer, Data Scientist, AI Developer, and Full-Stack positions with ML focus
`
    },
    {
      title: "Machine Learning Image Classifier",
      description: "Convolutional neural network built with TensorFlow and Keras for accurate image classification.",
      screenshot: "https://media.geeksforgeeks.org/wp-content/uploads/20230215093923/CNN-Architectures-1.png",
      github: "https://github.com/a-mwen/-image-classification",
      tech: [
        "Python", "TensorFlow", "Keras", "Machine Learning", "CNN"
      ],
      liveDemo: null,
      detailedDescription: `
### What It Does
Classifies images using deep learning with high accuracy.

### Technical Stack
- CNN built in TensorFlow and Keras
- Model training, validation, and evaluation

### Role Relevance
Great for AI/ML engineering or data science
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

        {/* Background Shapes */}
        <div className="shape shape-one w-40 h-40 bg-green-500 opacity-40 rounded-full absolute top-0 right-10 filter blur-lg"></div>
        <div className="shape shape-two w-52 h-52 bg-purple-500 opacity-40 rounded-full absolute bottom-0 left-10 filter blur-lg"></div>
        <div className="shape shape-three w-44 h-44 bg-yellow-500 opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      </main>
    </div>
  );
}
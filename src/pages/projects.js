import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';
import { marked } from 'marked';

const categories = {
  "Web Development": [
    { 
      title: "Event Tracker", 
      description: "A web application that allows users to create, manage, and track events. Features include user authentication, event creation, and RSVP functionality.", 
      image: "/images/eventTracker.png", // Replace with an actual image URL
      github: "https://github.com/a-mwen/EventTracker-project", 
      tech: "PHP, CSS, JavaScript, Hack"
    },
    { title: "Portfolio Website", description: "A personal portfolio website designed to showcase skills, projects, and accomplishments. Fully responsive and optimized for both desktop and mobile views.", 
      image: "/images/portfolio.png", github: "#", tech: "HTML, CSS, JavaScript, React" },
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
      description: "This project demonstrates secure authentication using Azure AD B2C, a cloud-based identity management service from Microsoft. Built with React.js and Node.js, the app enables users to sign in and register via a Microsoft account with OAuth 2.0 authentication. The project showcases frontend and backend integration, user profile management, and the implementation of secure authentication flows. It highlights skills in Web Development, Full Stack Development, API Integration, and Cloud Authentication.", 
      image: "/images/azure-ad-b2c.png", 
      github: "https://github.com/a-mwen/azure-auth-repo", 
      tech: "React, Azure AD B2C, MSAL.js, CSS",
      liveDemo: "https://azure-auth-repo.vercel.app/" 
    }
    
  ],  "Machine Learning": [
    { title: "Image Classification", description: "A machine learning model that classifies images into different categories using Convolutional Neural Networks (CNN) for accuracy.", image: "https://media.geeksforgeeks.org/wp-content/uploads/20230215093923/CNN-Architectures-1.png", github: "https://github.com/a-mwen/-image-classification", tech: "Python, TensorFlow, Keras", snippet: `# Load dataset\nimport numpy as np\nfrom tensorflow.keras.datasets import cifar10\nfrom tensorflow.keras.utils import to_categorical\n\n(X_train, y_train), (X_test, y_test) = cifar10.load_data()\n\n# Normalize data\nX_train = X_train.astype('float32') / 255.0\nX_test = X_test.astype('float32') / 255.0\n\n# One-hot encode labels\ny_train = to_categorical(y_train, 10)\ny_test = to_categorical(y_test, 10)\n\n# Build model\nmodel = Sequential([\n  Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),\n  MaxPooling2D((2, 2)),\n  Conv2D(64, (3, 3), activation='relu'),\n  MaxPooling2D((2, 2)),\n  Conv2D(128, (3, 3), activation='relu'),\n  MaxPooling2D((2, 2)),\n  Flatten(),\n  Dense(128, activation='relu'),\n  Dropout(0.5),\n  Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])` },
    { title: "Recommendation System - COMING SOON", description: "A machine learning-powered recommendation engine that suggests products or content based on user behavior and preferences.", image: "/path/to/recommendation.jpg", github: "#", tech: "Python, Scikit-Learn" }
  ],
  "Databases": [
    { 
      title: "Library Management System", 
      description: "A comprehensive library management system that catalogs books, manages user accounts, and tracks book loans and returns, all built on a MySQL database", 
      image: "/images/database.png", 
      github: "https://github.com/a-mwen/Library-management-database/tree/master",
      tech: "SQL, Node.js, Express",
      detailedDescription: `
### Features
- **Catalog and manage library resources**
- **User management**
- **Loan tracking**

### Code Snippet
**Main route in Express.js**:
\`\`\`javascript
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'library_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
\`\`\`
`,
    },
    { title: "Inventory Management - COMING SOON", description: "A robust system to monitor and manage inventory levels, orders, and stock control for businesses.", image: "/path/to/inventory.jpg", github: "#", tech: "MySQL, Express, Node.js" }
  ],
  "Mobile Development": [
    { title: "Fitness Tracker App System - COMING SOON", description: "A mobile app to track daily workouts, fitness goals, and progress over time with analytics and motivational reminders.", image: "/path/to/fitness.jpg", github: "#", tech: "Swift, Firebase" },
    { title: "Task Management App System - COMING SOON", description: "A React Native-based task management app that helps users organize and prioritize their daily tasks with notifications and a sleek UI.", image: "/path/to/task.jpg", github: "#", tech: "React Native, Redux" }
  ],
  "Other": [
    { title: "Job Board Application - COMING SOON", description: "A platform where employers can post job openings, and job seekers can search for and apply to positions", image: "/path/to/electronics.jpg", github: "#", tech: "PHP, PostgreSQL, jQuery, Bootstrap" },
    { title: "Game Development- COMING SOON", description: "Create a simple game using Unity or Unreal Engine.", image: "/path/to/game.jpg", github: "#", tech: "C#, Unity" }
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

    // Animate category names on load
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
                    className="project-card bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-1/2 flex-shrink-0"
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
          ))}
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
              {selectedProject.detailedDescription && (
                <div className="bg-gray-200 p-4 rounded-lg text-left mb-4">
                  <h3 className="text-xl font-bold mb-2">Detailed Description</h3>
                  <span dangerouslySetInnerHTML={{ __html: marked(selectedProject.detailedDescription) }} className="text-gray-700"></span>
                </div>
              )}
              {selectedProject.screenshot && (
                <div>
                  <h3 className="text-xl font-bold mb-2">Screenshot</h3>
                  <img src={selectedProject.screenshot} alt={`${selectedProject.title} Screenshot`} className="w-full h-auto rounded-md mb-4"/>
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
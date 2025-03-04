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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close modal function
  const closeModal = () => {
    gsap.to(".modal", { opacity: 0, y: -20, duration: 0.3, onComplete: () => setSelectedProject(null) });
  };

  // Open modal with animation
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    gsap.fromTo(".modal", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
  };

  // Filter projects based on search and category
  const filteredProjects = Object.keys(categories).reduce((acc, category) => {
    if (selectedCategory !== "All" && category !== selectedCategory) return acc;
    acc[category] = categories[category].filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>

      {/* Filtering Options */}
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border rounded-lg text-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {Object.keys(categories).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Project List */}
      {Object.entries(filteredProjects).map(([category, projects]) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length > 0 ? (
              projects.map(project => (
                <motion.div
                  key={project.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleProjectClick(project)}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={project.image} alt={project.title} className="rounded-lg mb-3"/>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500">No projects found.</p>
            )}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center modal">
          <div ref={modalRef} className="bg-gray-900 p-6 rounded-lg shadow-lg w-3/4 max-w-2xl relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="mb-4 rounded-lg"/>
            <p>{selectedProject.description}</p>
            <p className="text-green mt-2"><strong>Tech Stack:</strong> {selectedProject.tech}</p>
            <div className="mt-4 flex gap-4">
              {selectedProject.github && <a href={selectedProject.github} className="text-blue-400 underline">GitHub</a>}
              {selectedProject.liveDemo && <a href={selectedProject.liveDemo} className="text-blue-400 underline">Live Demo</a>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
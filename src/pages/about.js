// src/pages/about.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function About() {
  useEffect(() => {
    gsap.fromTo(".about-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    // Animate technologies
    gsap.fromTo(".technology", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });

    // Animate background shapes to move all over the screen
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
  }, []);

  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />
      <main className="container mx-auto p-4 flex flex-col justify-center items-start min-h-screen pt-12 md:pt-16">
        <div className="about-content relative z-10">
          <h1 className="text-4xl font-bold text-green mb-4">ABOUT</h1>
          <p className="text-lg sm:text-xl mb-4">
            <span className="typography-font mb-8">
              I am a full-stack software developer and data analyst with a passion for building robust, scalable systems. With strong skills in <span className="text-yellow-500 font-bold">backend development</span> and <span className="text-purple-500 font-bold">data analysis</span>, I focus on creating efficient solutions and optimizing system performance. 
              I am currently pursuing my <span className="text-blue-500 font-bold">Bachelor of Science in Computer Science</span> at <span className="text-blue-500">Point Park University</span>, graduating in May 2025.
            </span>
          </p>
          <p className="text-lg sm:text-xl mb-4">
            In my career, I’ve worked on a variety of projects that have deepened my expertise in backend technologies, database design, and full-stack application development.
          </p>
          <p className="text-lg sm:text-xl mb-4">Currently, I’m a Computer Science Tutor and a Library Associate at Point Park University, guiding students in mastering key concepts like data structures, algorithms, and backend development.</p>
          <p className="text-lg sm:text-xl mb-4">Technologies I work with on a daily basis include:</p>
          <ul className="text-lg sm:text-xl mb-4 flex flex-wrap gap-4">
            <li className="technology text-green-500 bg-gray-800 p-2 rounded-xl">HTML</li>
            <li className="technology text-purple-500 bg-gray-800 p-2 rounded-xl">CSS</li>
            <li className="technology text-yellow-500 bg-gray-800 p-2 rounded-xl">JavaScript</li>
            <li className="technology text-blue-500 bg-gray-800 p-2 rounded-xl">ReactJS</li>
            <li className="technology text-red-500 bg-gray-800 p-2 rounded-xl">SQL (PostgreSQL, MySQL, MongoDB)</li>
            <li className="technology text-gray-300 bg-gray-800 p-2 rounded-xl">Next.js</li>
            <li className="technology text-gray-300 bg-gray-800 p-2 rounded-xl">Node.js</li>
            <li className="technology text-blue-400 bg-gray-800 p-2 rounded-xl">Python</li> {/* Added Python with blue styling */}
          </ul>
          <p className="text-lg sm:text-xl mb-4">In my most recent project with Sunfresh Food Services, I led the backend development of an inventory management system, optimizing database queries and building scalable APIs.</p>
          <p className="text-lg sm:text-xl mb-4">I’m dedicated to continuous learning, growth, and delivering high-quality solutions in both full-stack development and data analysis.</p>

          {/* Athletic Achievements */}
          <h2 className="text-3xl font-bold text-green mb-4">Athletic Achievements</h2>
          <p className="text-lg sm:text-xl mb-4">Point Park Women's Soccer - 2021 to Present</p>
          <ul className="list-disc list-inside mb-4 text-lg sm:text-xl"> {/* Ensured the font size is consistent */}
            <li className="mb-2">NCAA Division II Scholar</li>
            <li className="mb-2">Contributed to the team's success in regional championships and playoffs during the 2022 and 2023 seasons</li>
            <li className="mb-2">Awarded conference Scholar-Athlete in 2022</li>
            <li className="mb-2">Chi Alpha Sigma Member</li>
          </ul>

          {/* Extracurricular Activities */}
          <h2 className="text-3xl font-bold text-green mb-4">Extracurricular Activities</h2>
          <ul className="list-disc list-inside mb-4 text-lg sm:text-xl"> {/* Font size aligned */}
            <li className="mb-2">Consistent member of the Dean’s List for academic excellence</li>
            <li className="mb-2">Active in organizations such as Rewrite the Code and ColorStack, promoting diversity in tech</li>
          </ul>
        </div>
        {/* Animated Shapes */}
        <div className="shape-one w-40 h-40 bg-green-500 opacity-40 rounded-full absolute top-0 right-10 filter blur-lg"></div>
        <div className="shape-two w-52 h-52 bg-purple-500 opacity-40 rounded-full absolute bottom-0 left-10 filter blur-lg"></div>
        <div className="shape-three w-44 h-44 bg-yellow-500 opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      </main>
    </div>
  );
}

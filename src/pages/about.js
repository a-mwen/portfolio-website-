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
      <main className="container mx-auto p-4 flex flex-col justify-center items-start min-h-screen pt-12 md:pt-16"> {/* Added padding top */}
        <div className="about-content relative z-10">
          <h1 className="text-4xl font-bold text-green mb-4">ABOUT</h1>
          <p className="text-lg sm:text-xl mb-4">
            <span className="typography-font mb-8">A backend developer with a deep interest in <span className="text-red-500 font-bold">database management</span>, data structures, and efficient algorithms. 
            I am a backend-focused software engineer with a Bachelor of Science degree in <span className="text-yellow-500 font-bold">Computer Science</span> from 
            <span className="text-blue-500"> Point Park University</span>, expected graduation May 2025.</span>
          </p>
          <p className="text-lg sm:text-xl mb-4">Throughout my career, I have worked on various projects and held positions that have strengthened my skills in database design, management, and backend development.</p>
          <p className="text-lg sm:text-xl mb-4">Currently, I am a Computer Science Tutor at Point Park University, where I guide students in understanding fundamental concepts of computer science, including programming languages, data structures, and algorithms. Additionally, I assist students and faculty as a Library Associate, providing support with library resources and research.</p>
          <p className="text-lg sm:text-xl mb-4">On a daily basis, I work with:</p>
          <ul className="text-lg sm:text-xl mb-4 flex flex-wrap gap-4">
            <li className="technology text-red-500 bg-gray-800 p-2 rounded-xl">HTML</li>
            <li className="technology text-blue-500 bg-gray-800 p-2 rounded-xl">CSS</li>
            <li className="technology text-yellow-500 bg-gray-800 p-2 rounded-xl">JavaScript</li>
            <li className="technology text-pink-500 bg-gray-800 p-2 rounded-xl">ReactJS</li>
            <li className="technology text-green-500 bg-gray-800 p-2 rounded-xl">SQL (PostgreSQL, MySQL, MongoDB)</li>
            <li className="technology text-gray-300 bg-gray-800 p-2 rounded-xl">Next.js</li>
            <li className="technology text-gray-300 bg-gray-800 p-2 rounded-xl">Node.js</li>
          </ul>
          <p className="text-lg sm:text-xl mb-4">In my recent project with Sunfresh Food Services, I spearheaded the design and development of a robust backend system, enhancing their inventory and order management system with efficient database queries and APIs.</p>
          <p className="text-lg sm:text-xl mb-4">I am passionate about building scalable and efficient backend systems, and I am always eager to learn and grow in a fast-paced and challenging environment.</p>
          
          {/* Athletic Achievements */}
          <h2 className="text-3xl font-bold text-green mb-4">Athletic Achievements</h2>
          <p className="text-lg sm:text-xl mb-4">2021 - Present</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">NCAA Division II Scholar</li>
            <li className="mb-2">Contributed to the team's success in regional championships and playoffs during the 2022 and 2023 seasons</li>
            <li className="mb-2">Awarded as conference Scholar-Athlete in 2022</li>
            <li className="mb-2">Chi Alpha Sigma Member</li>
          </ul>

          {/* Extracurricular Activities */}
          <h2 className="text-3xl font-bold text-green mb-4">Extracurricular Activities</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Member of the Dean's List consistently for outstanding academic performance</li>
            <li className="mb-2">Engaged in organizations like Rewrite the Code and ColorStack, promoting diversity and inclusion in the tech community</li>
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

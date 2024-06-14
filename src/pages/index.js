// src/pages/index.js
// src/pages/index.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function Home() {
  useEffect(() => {
    gsap.fromTo(".intro h1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    gsap.fromTo(".intro p", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

    // Animation for icons and links on hover
    const elements = document.querySelectorAll('.social-icon, .social-link');
    elements.forEach(element => {
      element.addEventListener('mouseover', () => {
        gsap.to(element, { y: -5, duration: 0.3 });
      });
      element.addEventListener('mouseout', () => {
        gsap.to(element, { y: 0, duration: 0.3 });
      });
    });

    // Animate shapes
    gsap.to(".shape.circle", {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".shape.square", {
      x: "random(-150, 150)",
      y: "random(-150, 150)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".shape.triangle", {
      x: "random(-120, 120)",
      y: "random(-120, 120)",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="bg-navy min-h-screen text-white">
    <Header />
    
    <div className="bg-navy min-h-screen text-white flex flex-col items-center justify-center relative">
      <Cursor />
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        <div className="intro text-center">
          <h1 className="text-4xl font-bold text-green mb-4">HELLO! MY NAME IS</h1>
          <h1 className="text-6xl font-bold mt-2 mb-4">Asha</h1>
          <h1 className="text-6xl font-bold mb-4">Mweene</h1>
          <p className="text-xl text-light-slate">
            I am a Software Engineer who loves to work on the web and back. I am passionate about
            building simple and elegant solutions to complex problems.
          </p>
        </div>
        <div className="flex justify-between w-full mt-6 px-4">
          <div className="absolute bottom-20 left-4 flex flex-col items-center space-y-2">
            <a href="https://www.linkedin.com/in/ashamweene" className="social-icon">
              <img src="https://brintonvision.com/wp-content/uploads/2016/05/linkedin-black.png" alt="LinkedIn" className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com/in/ashamweene" className="social-link text-green"> My linkedin</a>
          </div>
          <div className="absolute bottom-20 right-4 flex flex-col items-center space-y-2">
            <a href="https://github.com/a-mwen" className="social-icon">
              <img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="GitHub" className="w-8 h-8"/>
            </a>
            <a href="https://github.com/a-mwen" className="social-link text-green"> My github</a>
          </div>
        </div>
        <div className="shape circle"></div>
        <div className="shape square"></div>
        <div className="shape triangle"></div>
      </main>
    </div>
    </div>
  );
}
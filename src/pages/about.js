import { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function About() {
  useEffect(() => {
    gsap.fromTo(".about-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    gsap.fromTo(".technology", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });

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
          <h1 className="text-4xl font-bold text-white mb-4">ABOUT ME</h1>
          <p className="text-lg sm:text-xl mb-4 text-white">
            Hey there! I&apos;m a <span className="font-bold text-green-400">soon-to-be Computer Science graduate</span> with a passion for building, optimizing, and securing digital solutions. Whether it&apos;s crafting user-friendly applications, designing scalable backend systems, or diving into cybersecurity, I love problem-solving and making tech work better for people.
          </p>
          <p className="text-lg sm:text-xl mb-4 text-white">
            I&apos;m actively looking for opportunities in <span className="font-bold text-yellow-500">Software Engineering</span>, <span className="font-bold text-blue-500">Full-Stack Development</span>, <span className="font-bold text-purple-500">Cybersecurity</span>, and <span className="font-bold text-red-500">Technical Consulting</span>. If you&apos;re looking for someone who can build robust applications, analyze data, and secure systems—I&apos;m your person!
          </p>
          <p className="text-lg sm:text-xl mb-4 text-white">Here are some of the technologies I work with:</p>
          <ul className="text-lg sm:text-xl mb-4 flex flex-wrap gap-4">
            <li className="technology text-yellow-400 bg-gray-800 p-2 rounded-xl">JavaScript</li>
            <li className="technology text-blue-400 bg-gray-800 p-2 rounded-xl">TypeScript</li>
            <li className="technology text-green-400 bg-gray-800 p-2 rounded-xl">Node.js</li>
            <li className="technology text-purple-400 bg-gray-800 p-2 rounded-xl">React.js</li>
            <li className="technology text-gray-300 bg-gray-800 p-2 rounded-xl">Next.js</li>
            <li className="technology text-blue-500 bg-gray-800 p-2 rounded-xl">Firebase</li>
            <li className="technology text-red-500 bg-gray-800 p-2 rounded-xl">SQL (PostgreSQL, MySQL)</li>
            <li className="technology text-orange-500 bg-gray-800 p-2 rounded-xl">MongoDB</li>
            <li className="technology text-blue-300 bg-gray-800 p-2 rounded-xl">Python</li>
            <li className="technology text-green-500 bg-gray-800 p-2 rounded-xl">Azure AD B2C</li>
          </ul>
          <p className="text-lg sm:text-xl mb-4 text-white">
            Beyond tech, I have a strong competitive spirit—both in problem-solving and on the field. As a <span className="font-bold text-green-400">college athlete</span>, I&apos;ve learned discipline, teamwork, and adaptability, which I bring into my work.
          </p>

          {/* Athletic Achievements */}
          <h2 className="text-3xl font-bold text-white mb-4">Athletic Achievements</h2>
          <p className="text-lg sm:text-xl mb-4 text-white">Point Park Women&apos;s Soccer - 2021 to Present</p>
          <ul className="list-disc list-inside mb-4 text-lg sm:text-xl text-white">
            <li className="mb-2">NCAA Division II Scholar</li>
            <li className="mb-2">Awarded Conference Scholar-Athlete</li>
            <li className="mb-2">Chi Alpha Sigma Honor Society Member</li>
          </ul>

          {/* Extracurricular Activities */}
          <h2 className="text-3xl font-bold text-white mb-4">Extracurricular Activities</h2>
          <ul className="list-disc list-inside mb-4 text-lg sm:text-xl text-white">
            <li className="mb-2">Consistently on the Dean&apos;s List for academic excellence</li>
            <li className="mb-2">Member of Rewrite the Code & ColorStack, advocating for diversity in tech</li>
          </ul>

          <p className="text-lg sm:text-xl mt-6 text-white">
            I&apos;m excited to connect with companies and teams that value innovation, security, and impactful solutions. Let&apos;s build something great together!
          </p>
        </div>

        {/* Animated Shapes */}
        <div className="shape-one w-40 h-40 bg-green-500 opacity-40 rounded-full absolute top-0 right-10 filter blur-lg"></div>
        <div className="shape-two w-52 h-52 bg-purple-500 opacity-40 rounded-full absolute bottom-0 left-10 filter blur-lg"></div>
        <div className="shape-three w-44 h-44 bg-yellow-500 opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      </main>
    </div>
  );
}

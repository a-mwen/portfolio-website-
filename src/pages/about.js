import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function About() {
  const [activeTab, setActiveTab] = useState('professional');

  useEffect(() => {
    gsap.fromTo(".about-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".technology", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    gsap.fromTo(".tab", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 });
    
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Animate content change
    gsap.fromTo(".tab-content", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
  };

  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />
      
      {/* Animated Shapes in Background */}
      <div className="shape shape-one w-40 h-40 bg-green-500 opacity-20 rounded-full absolute top-20 right-10 filter blur-lg"></div>
      <div className="shape shape-two w-52 h-52 bg-purple-500 opacity-20 rounded-full absolute bottom-20 left-10 filter blur-lg"></div>
      <div className="shape shape-three w-44 h-44 bg-blue-500 opacity-20 rounded-full absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      
      <main className="container mx-auto p-4 flex flex-col justify-center items-start min-h-screen pt-16 md:pt-20 relative z-10">
        <div className="about-content w-full max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-green-400 mb-4">ABOUT ME</h1>
            <div className="h-1 w-20 bg-green-400 mx-auto"></div>
          </div>
          
          <div className="bio-section mb-12 bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-xl">
            <p className="text-lg sm:text-xl mb-6 text-white leading-relaxed">
              Hey there! I'm a <span className="font-bold text-green-400">soon-to-be Computer Science graduate</span> with a passion for building, optimizing, and securing digital solutions. Whether it's crafting user-friendly applications, designing scalable backend systems, or diving into cybersecurity, I love problem-solving and making tech work better for people.
            </p>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              I'm actively looking for opportunities in <span className="font-bold text-yellow-500">Software Engineering</span>, <span className="font-bold text-blue-500">Full-Stack Development</span>, <span className="font-bold text-purple-500">Cybersecurity</span>, and <span className="font-bold text-red-500">Technical Consulting</span>. If you're looking for someone who can build robust applications, analyze data, and secure systems—I'm your person!
            </p>
          </div>
          
          {/* Tabbed Interface */}
          <div className="tabs-container mb-12">
            <div className="tabs flex mb-4 border-b border-gray-700">
              <button 
                className={`tab px-6 py-3 text-lg font-semibold transition-all ${activeTab === 'professional' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => handleTabClick('professional')}
              >
                Professional
              </button>
              <button 
                className={`tab px-6 py-3 text-lg font-semibold transition-all ${activeTab === 'technical' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => handleTabClick('technical')}
              >
                Technical Skills
              </button>
              <button 
                className={`tab px-6 py-3 text-lg font-semibold transition-all ${activeTab === 'personal' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => handleTabClick('personal')}
              >
                Personal
              </button>
            </div>
            
            <div className="tab-content p-4 bg-gray-900 bg-opacity-70 rounded-lg shadow-lg">
              {activeTab === 'professional' && (
                <div className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-3">Professional Journey</h2>
                    <p className="text-lg text-white leading-relaxed">
                      As a computer science student with a focus on software development and cybersecurity, I've built a solid foundation in creating secure, efficient applications. I approach each project with attention to detail, focusing on both functionality and user experience.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">Areas of Interest</h3>
                      <ul className="list-disc list-inside space-y-2 text-white">
                        <li>Full-Stack Development</li>
                        <li>Security Engineering</li>
                        <li>Cloud Architecture</li>
                        <li>Technical Consulting</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Education</h3>
                      <p className="text-white mb-2">
                        <span className="font-bold">BS in Computer Science</span>
                      </p>
                      <p className="text-white">Point Park University, Graduating 2025</p>
                      <p className="text-gray-400 mt-2">Dean's List, NCAA Scholar Athlete</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'technical' && (
                <div>
                  <h2 className="text-2xl font-bold text-green-400 mb-4">Technical Toolkit</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-yellow-400 mb-3">Frontend</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>JavaScript/TypeScript</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>React.js</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>Next.js</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>HTML/CSS</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>Tailwind CSS</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Backend</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>Node.js</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>Express</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>Python</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>PHP</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>RESTful APIs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-purple-400 mb-3">Database & Cloud</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>SQL (PostgreSQL, MySQL)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>MongoDB</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>Firebase</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>Azure</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>Azure AD B2C</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Recent Technologies I've Worked With</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="technology text-yellow-400 bg-gray-800 p-2 rounded-xl">JavaScript</span>
                      <span className="technology text-blue-400 bg-gray-800 p-2 rounded-xl">TypeScript</span>
                      <span className="technology text-green-400 bg-gray-800 p-2 rounded-xl">Node.js</span>
                      <span className="technology text-purple-400 bg-gray-800 p-2 rounded-xl">React.js</span>
                      <span className="technology text-gray-300 bg-gray-800 p-2 rounded-xl">Next.js</span>
                      <span className="technology text-blue-500 bg-gray-800 p-2 rounded-xl">Firebase</span>
                      <span className="technology text-red-500 bg-gray-800 p-2 rounded-xl">SQL</span>
                      <span className="technology text-orange-500 bg-gray-800 p-2 rounded-xl">MongoDB</span>
                      <span className="technology text-blue-300 bg-gray-800 p-2 rounded-xl">Python</span>
                      <span className="technology text-green-500 bg-gray-800 p-2 rounded-xl">Azure AD B2C</span>
                      <span className="technology text-pink-400 bg-gray-800 p-2 rounded-xl">PWA</span>
                      <span className="technology text-indigo-400 bg-gray-800 p-2 rounded-xl">GitHub Actions</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'personal' && (
                <div className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-3">Beyond The Code</h2>
                    <p className="text-lg text-white leading-relaxed">
                      Beyond tech, I have a strong competitive spirit—both in problem-solving and on the field. As a <span className="font-bold text-green-400">college athlete</span>, I've learned discipline, teamwork, and adaptability, which I bring into my development work.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-yellow-400 mb-3">Athletic Achievements</h3>
                      <p className="text-white mb-3">Point Park Women's Soccer - 2021 to Present</p>
                      <ul className="list-disc list-inside space-y-2 text-white">
                        <li>NCAA Division II Scholar</li>
                        <li>Awarded Conference Scholar-Athlete</li>
                        <li>Chi Alpha Sigma Honor Society Member</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Community Involvement</h3>
                      <ul className="list-disc list-inside space-y-2 text-white">
                        <li>Consistently on the Dean's List for academic excellence</li>
                        <li>Member of Rewrite the Code & ColorStack, advocating for diversity in tech</li>
                        <li>Mentor for aspiring developers in university programs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-green-400 mb-3">What Drives Me</h3>
                    <p className="text-lg text-white leading-relaxed">
                      I'm passionate about creating technology that makes a difference. Whether it's building intuitive user interfaces, optimizing backend systems for performance, or implementing robust security measures, I believe in developing solutions that genuinely help people and organizations.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="cta-section text-center bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Let's Connect!</h2>
            <p className="text-lg text-white mb-6">
              I'm excited to connect with companies and teams that value innovation, security, and impactful solutions. Let's build something great together!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105">
                Contact Me
              </a>
              <a href="/projects" className="bg-transparent hover:bg-white text-white hover:text-navy font-bold py-2 px-6 rounded-full border-2 border-white transition-all transform hover:scale-105">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
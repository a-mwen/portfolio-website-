import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Animate content on page load
    gsap.fromTo(".contact-title", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.8 });
    gsap.fromTo(".contact-content", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.fromTo(".contact-method", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, delay: 0.4 });
    
    // Animate background shapes
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach(shape => {
      gsap.to(shape, {
        x: () => Math.random() * window.innerWidth - 50,
        y: () => Math.random() * window.innerHeight - 50,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashamweene2004@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000); // Reset after 3 seconds
  };

  const handleItemHover = (item) => {
    setActiveItem(item);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />
      
      {/* Animated Background Shapes */}
      <div className="shape shape-one w-64 h-64 bg-green-500 opacity-20 rounded-full absolute top-0 right-10 filter blur-xl"></div>
      <div className="shape shape-two w-72 h-72 bg-purple-500 opacity-20 rounded-full absolute bottom-0 left-10 filter blur-xl"></div>
      <div className="shape shape-three w-56 h-56 bg-blue-500 opacity-20 rounded-full absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
      <div className="shape shape-four w-48 h-48 bg-yellow-500 opacity-20 rounded-full absolute bottom-1/4 right-1/4 filter blur-xl"></div>
      
      <main className="container mx-auto p-4 flex flex-col justify-center items-center min-h-screen pt-20 relative z-10">
        <div className="max-w-3xl w-full">
          <h1 className="contact-title text-5xl font-bold text-green-400 mb-6 text-center">GET IN TOUCH</h1>
          <div className="h-1 w-24 bg-green-400 mx-auto mb-12"></div>
          
          <div className="contact-content bg-gray-900 bg-opacity-70 p-8 rounded-xl shadow-xl mb-12">
            <p className="text-xl font-medium mb-8 leading-relaxed text-center">
              I&apos;m always open to discussing new opportunities, collaborations, or simply connecting. 
              If you&apos;d like to reach out, feel free to contact me through any of these methods:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email Contact Method */}
              <div 
                className={`contact-method bg-gray-800 p-6 rounded-lg transition-all duration-300 ${activeItem === 'email' ? 'transform scale-105 shadow-lg bg-opacity-90' : ''}`}
                onMouseEnter={() => handleItemHover('email')}
                onMouseLeave={handleItemLeave}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-400">Email</h2>
                </div>
                
                <p className="text-lg mb-4 font-medium text-blue-400 break-all">
                  ashamweene2004@gmail.com
                </p>
                
                <button
                  className="w-full bg-green-500 text-navy px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:bg-green-600 font-semibold flex items-center justify-center"
                  onClick={handleCopyEmail}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  {emailCopied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
              
              {/* LinkedIn Contact Method */}
              <div 
                className={`contact-method bg-gray-800 p-6 rounded-lg transition-all duration-300 ${activeItem === 'linkedin' ? 'transform scale-105 shadow-lg bg-opacity-90' : ''}`}
                onMouseEnter={() => handleItemHover('linkedin')}
                onMouseLeave={handleItemLeave}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-400">LinkedIn</h2>
                </div>
                
                <p className="text-lg mb-4 text-gray-300">
                  Connect with me professionally on LinkedIn
                </p>
                
                <a 
                  href="https://www.linkedin.com/in/ashamweene" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-600 font-semibold flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Profile
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-3">Let&apos;s Collaborate</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you&apos;re looking for a developer for your next project, have a job opportunity, 
                or just want to connect and exchange ideas, I&apos;d love to hear from you!
              </p>
            </div>
          </div>
          
          {/* Status Message */}
          <div className="text-center mb-8">
            <p className="text-lg text-purple-400 italic">
              Currently available for full-time positions and freelance projects.
            </p>
            <p className="text-lg text-green-400 mt-2">
              Response time: Usually within 24 hours
            </p>
          </div>
          
          {/* Coming Soon Section */}
          <div className="text-center bg-gray-900 bg-opacity-70 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Coming Soon</h3>
            <p className="text-gray-300">
              A contact form for easier messaging — Stay tuned for updates as I continue building this site!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
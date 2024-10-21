import { useState } from 'react';
import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashamweene2004@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />
      
      <main className="container mx-auto p-4 flex flex-col justify-center items-center text-center min-h-screen pt-12">
        <div className="mb-8 mt-8 w-full">
          <h1 className="text-4xl font-bold text-green mb-8">Get in Touch</h1>
          <p className="text-xl sm:text-2xl font-medium mb-4">
            I&apos;m always open to discussing new opportunities, collaborations, or simply connecting. If you&apos;d like to reach out, feel free to contact me at:
          </p>
          
          <p className="text-xl sm:text-2xl mb-4 text-blue-500 font-semibold">
            ashamweene2004@gmail.com
          </p>

          <button 
            className="bg-green text-navy px-6 py-2 rounded-md mb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700" 
            onClick={handleCopyEmail}
          >
            Copy Email to Clipboard
          </button>
          
          {emailCopied && (
            <p className="text-lg sm:text-xl text-green-500 mb-4">
              Email copied to clipboard!
            </p>
          )}

          <p className="text-lg sm:text-xl mb-4">
            Or feel free to connect with me on 
            <a href="https://www.linkedin.com/in/ashamweene" className="text-blue-400 hover:underline ml-1">LinkedIn</a>.
          </p>

          <p className="text-lg sm:text-xl text-purple-500 mb-8">
            Stay tuned for updates as I continue building this site!
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

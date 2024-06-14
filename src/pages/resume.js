import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function Resume() {
  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />

      <main className="container mx-auto p-4 flex flex-col justify-center items-center text-center min-h-screen">
        <div className="mb-8 mt-16 w-full px-4"> {/* Added padding for better fit on mobile */}
          <h1 className="text-4xl font-bold text-green mb-8">RESUME</h1>
          <p className="text-lg sm:text-xl mb-4">You can view or download my resume below. If you have any questions or opportunities, please feel free to reach out!</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a href="/docs/Asha Mweene Resume-Current.pdf" download className="bg-blue-500 text-navy px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700">Download Resume</a>
            <a href="/docs/Asha Mweene Resume-Current.pdf" target="_blank" rel="noopener noreferrer" className="bg-green text-navy px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700">View Resume</a>
          </div>
          <iframe src="/docs/Asha Mweene Resume-Current.pdf" className="w-full h-96 mb-8 shadow-lg rounded-md" title="Resume" />
        </div>

        {/* Animated Shapes */}
        <div className="shape-one w-40 h-40 bg-green-500 opacity-40 rounded-full absolute top-0 right-10 filter blur-lg"></div>
        <div className="shape-two w-52 h-52 bg-purple-500 opacity-40 rounded-full absolute bottom-0 left-10 filter blur-lg"></div>
        <div className="shape-three w-44 h-44 bg-yellow-500 opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      </main>
    </div>
  );
}
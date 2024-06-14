import Header from '../components/Header';
import Cursor from '../components/cursor';

export default function Contact() {
  return (
    <div className="bg-navy min-h-screen text-white relative overflow-hidden">
      <Header />
      <Cursor />

      <main className="container mx-auto p-4 flex flex-col justify-center items-center text-center min-h-screen pt-12"> {/* Added pt-12 to push up content */}
        <div className="mb-8 mt-8 w-full">  {/* Reduced mt-16 for a slight push up */}
          <h1 className="text-4xl font-bold text-green mb-8">CONTACT</h1>
          <p className="text-2xl sm:text-3xl font-bold mb-4">
            Let’s keep in touch. If you have an <span className="text-blue-500">exciting opportunity</span> for me, or if you just simply want to say <span className="text-yellow-500">hello</span>, feel free to reach out!
          </p>
          <p className="text-xl sm:text-2xl mb-4 text-red-500">ashamweene2004@gmail.com</p>
          <button className="bg-green text-navy px-6 py-2 rounded-md mb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700" onClick={() => navigator.clipboard.writeText("ashamweene2004@gmail.com")}>Click to Copy Email</button>
          <p className="text-lg sm:text-xl mb-4">
            Alternatively, you can also send me a message on <a href="https://www.linkedin.com/in/ashamweene" className="text-blue-400 hover:underline">LinkedIn</a>.
          </p>
          <p className="text-lg sm:text-xl text-purple-500">This site is still in the works, check back often. ☺</p>
        </div>
        {/* Animated Shapes */}
        <div className="shape-one w-40 h-40 bg-green-500 opacity-40 rounded-full absolute top-0 right-10 filter blur-lg"></div>
        <div className="shape-two w-52 h-52 bg-purple-500 opacity-40 rounded-full absolute bottom-0 left-10 filter blur-lg"></div>
        <div className="shape-three w-44 h-44 bg-yellow-500 opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-lg"></div>
      </main>
    </div>
  );
}
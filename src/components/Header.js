import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Import icons from react-icons
import { FaHome, FaProjectDiagram, FaEnvelope, FaInfoCircle, FaFileAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white p-4 shadow-lg relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span
            className="text-lg font-bold hover:text-green cursor-pointer flex items-center"
            onClick={() => router.push('/')}
          >
            <FaHome className="mr-1" /> Asha Mweene
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/about"><FaInfoCircle className="mr-1" /> About</NavLink>
          <NavLink href="/projects"><FaProjectDiagram className="mr-1" /> Projects</NavLink>
          <NavLink href="/contact"><FaEnvelope className="mr-1" /> Contact</NavLink>
          <NavLink href="/resume"><FaFileAlt className="mr-1" /> Resume</NavLink>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-navy shadow-lg md:hidden">
          <div className="flex flex-col space-y-2 py-4 px-4">
            <NavLink href="/about" onClick={() => setMenuOpen(false)}><FaInfoCircle className="mr-1" /> About</NavLink>
            <NavLink href="/projects" onClick={() => setMenuOpen(false)}><FaProjectDiagram className="mr-1" /> Projects</NavLink>
            <NavLink href="/contact" onClick={() => setMenuOpen(false)}><FaEnvelope className="mr-1" /> Contact</NavLink>
            <NavLink href="/resume" onClick={() => setMenuOpen(false)}><FaFileAlt className="mr-1" /> Resume</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

// Custom NavLink component for consistent styling and accessibility
const NavLink = ({ href, children, onClick }) => (
  <Link href={href}>
    <span onClick={onClick} className="text-lg hover:text-green cursor-pointer flex items-center px-4 py-2 md:p-0">
      {children}
    </span>
  </Link>
);

export default Header;
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
          Malik Ali
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-4 border-b border-gray-700 hover:bg-cyan-500 hover:text-white duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>

          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;
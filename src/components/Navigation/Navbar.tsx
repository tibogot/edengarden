import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 focus:outline-none"
          >
            <List size={28} />
          </button>
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-white"
            >
              <X size={32} />
            </button>
          </div>
          <div className="space-y-6 text-center text-2xl text-white">
            <Link to="/" className="block" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              to="/about"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

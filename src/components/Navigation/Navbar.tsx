import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(overlayRef.current, {
      xPercent: -100,
    });
  }, []);

  const toggleMenu = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (!isOpen) {
      // Open animation
      gsap.to(overlay, {
        xPercent: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
    } else {
      // Close animation
      gsap.to(overlay, {
        xPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>

          {/* Desktop Navbar Links */}
          <div className="hidden space-x-8 lg:flex">
            <Link
              to="/"
              className="font-NHD transition-colors hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-NHD transition-colors hover:text-gray-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-NHD transition-colors hover:text-gray-600"
            >
              Contact
            </Link>
          </div>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="group flex flex-col gap-[7px] focus:outline-none lg:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-7 bg-black transition-all duration-300 ${
                isOpen ? "translate-y-[9px] -rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-7 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-7 bg-black transition-all duration-300 ${
                isOpen ? "-translate-y-[9px] rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Navigation Overlay (Mobile) */}
      <div
        ref={overlayRef}
        className="bg-opacity-95 fixed inset-0 z-40 flex bg-black"
      >
        <div className="w-1/2 bg-white px-20 py-32">
          <div className="flex flex-col space-y-8 text-3xl">
            <Link
              to="/"
              className="font-NHD w-fit transition-colors hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-NHD w-fit transition-colors hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-NHD w-fit transition-colors hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white shadow-md"
      style={{ "--navbar-height": "56px" } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

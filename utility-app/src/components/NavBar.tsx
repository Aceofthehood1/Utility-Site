import { useState } from "react";
import { Menu, X } from "lucide-react"
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full bg-gray-800">
        <div className="flex items-center justify-center p-5 w-full">
          <button
            type="button"
            className="absolute left-2 inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleNavbar}
          >{isOpen ? <X /> : <Menu />}
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
          </button>
          <p className="text-4xl">Utility Site</p>
        </div>

      {isOpen && (
        <div className="flex flex-col items-center text-xl p-5">
        <a href="#register" className="hover:bg-orange-600 hover:text-white rounded-md px-3 py-2">Registration Form</a>
        <a href="#login" className="hover:bg-orange-600 hover:text-white rounded-md px-3 py-2">Log In Form</a>
        <a href="#carousel" className="hover:bg-orange-600 hover:text-white rounded-md px-3 py-2">Carousel</a>
        </div>
      )}
      
        
      </nav>
    </>
  );
}

export default NavBar;

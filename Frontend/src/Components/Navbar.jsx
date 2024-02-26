import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
   <div className='... sticky top-0' >
   
   <nav className="bg-gray-800   py-6 shadow-2xl ">
      <div className="container mx-auto flex  justify-between items-center   ">
       
        <div className="text-white text-3xl font-bold pl-4">Excel Infosys</div>
        
       
        <div className="hidden md:block  ">
          <ul className="flex space-x-9 text-white  ">

            <li><Link to="/" className="hover:text-gray-300 text-xl ">Home</Link></li>
            <li><Link to="/About" className="hover:text-gray-300 text-xl ">About</Link></li>
            <li><Link to="/Services" className="hover:text-gray-300 text-xl">Services</Link></li>
            <li><Link to="/Contact" className="hover:text-gray-300 text-xl">Contact Us</Link></li>
            
          </ul>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden pr-4">
          <button
            id="mobile-menu-toggle"
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="bg-gray-800 text-white text-center py-2">

          <li><Link to="/Home" className="block px-4 py-2 hover:bg-gray-700">Home</Link></li>
          <li><Link to="/About" className="block px-4 py-2 hover:bg-gray-700">About</Link></li>
          <li><Link to="/Services" className="block px-4 py-2 hover:bg-gray-700">Services</Link></li>
          <li><Link to="/Contact" className="block px-4 py-2 hover:bg-gray-700">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;

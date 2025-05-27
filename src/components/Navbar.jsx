import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 bg-black bg-opacity-70 backdrop-blur-md text-white z-50 border-b border-gray-800">
      <div className="container mx-auto h-full flex items-center justify-center">
        <ul className="flex space-x-6 md:space-x-10">
          {[
            { path: "/", name: "HOME" },
            { path: "/projects", name: "PROJECTS" },
            { path: "/about", name: "ABOUT" },
            { path: "/contact", name: "CONTACT" }
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `uppercase text-sm tracking-wider transition-all duration-300 
                  ${isActive ? 'text-white font-medium' : 'text-gray-400'} 
                  hover:text-gray-200 hover:scale-105`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-10 p-4 flex justify-center items-center bg-transparent">
      <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-10 mt-2">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.08em', fontSize: '0.8em' }}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.08em', fontSize: '0.8em' }}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.08em', fontSize: '0.8em' }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.08em', fontSize: '0.8em' }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

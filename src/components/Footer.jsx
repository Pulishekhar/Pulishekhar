import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center p-4 bg-transparent text-white fixed bottom-0">
      <div className="flex space-x-4">
        <a 
          href="https://github.com/Pulishekhar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl transition duration-300 hover:text-gray-500" // Changed hover color to blue
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a 
          href="https://www.linkedin.com/in/pulishekhar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl transition duration-300 hover:text-gray-500" // Changed hover color to blue
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a 
  href="mailto:pulishekhar6039@gmail.com"
  className="text-2xl transition duration-300 hover:text-gray-500" // Dark gray as a black alternative
>
  <FontAwesomeIcon icon={faEnvelope} />
</a>

      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-4 bg-black bg-opacity-50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8">
          {[
            { icon: faGithub, url: "https://github.com/Pulishekhar" },
            { icon: faLinkedin, url: "https://www.linkedin.com/in/pulishekhar/" },
            { icon: faEnvelope, url: "mailto:pulishekhar6039@gmail.com" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} // Replace with your background image path
    >
      <div className="bg-opacity-80 text-white p-6 rounded-lg w-full mt-[80px] mb-[60px]">
        
        {/* Projects Heading */}
        <h2 className="text-4xl font-bold mb-4 text-left ml-4">Projects</h2>

        {/* Project Items */}
        <div className="flex flex-col space-y-6">
          

         {/* Chatting App - Real-time Messaging Application */}
<div className="flex items-start">
  <h3 className="text-xl font-semibold w-1/4 mt-4 text-left">Chatting App - Real-time Messaging Application-{" "}
  <a href="https://github.com/Pulishekhar/Chatting-App.git" className="underline">
                link
              </a>
  
   </h3>
  <ul className="list-disc ml-6 w-3/4">
    <li>Built a real-time messaging application using the MERN (MongoDB, Express, React, Node.js) stack, implementing features like user authentication, direct messaging, and chat history storage.</li>
    <li>Integrated WebSockets (Socket.io) for real-time communication, ensuring instant message delivery and seamless user experience.</li>
    <li>Implemented a user-friendly interface with dynamic message input, real-time notifications, and the ability to send images.</li>
    <li>Optimized backend with Express for handling API requests, and MongoDB for scalable data storage, including user profiles and messages.</li>
  </ul>
</div>


{/* PDF Parsing System - AI-Powered PDF Analysis */}
<div className="flex items-start">
  <h3 className="text-xl font-semibold w-1/4 mt-4 text-left">PDF Parsing System - AI-Powered PDF Analysis-{" "}
  <a href="https://github.com/Pulishekhar/PAI.git" className="underline">
                link
              </a>


  </h3>
  <ul className="list-disc ml-6 w-3/4">
    <li>Developed an AI-powered PDF parsing system capable of analyzing large PDFs (1000+ pages), built with AngularJS for the frontend and Python for the backend, optimized for asynchronous processing.</li>
    <li>Integrated AI-powered search and summarization features, enabling efficient extraction of meaningful data from lengthy documents with minimal user input.</li>
    <li>Implemented chunked processing (50-100 pages at a time) with caching, significantly improving performance and reducing memory usage during large file handling.</li>
    <li>Utilized pdfplumber and PyMuPDF libraries in Python for precise extraction of text and images from PDFs, supporting the backend processing of large files with streaming capabilities.</li>
  </ul>
  </div>
          {/* Bookstore Application */}
          <div className="flex items-start">
            <h3 className="text-xl font-semibold w-1/4 mt-4 text-left">
              Bookstore Application -{" "}
              <a href="https://github.com/Pulishekhar/Bookstore.git" className="underline">
                link
              </a>
            </h3>
            <ul className="list-disc ml-6 w-3/4">
              <li>Built a full-stack bookstore application using React, Node.js, Express.js, and MongoDB, featuring book categorization, user authentication, and access control for restricted sections.</li>
              <li>Employed Tailwind CSS and DaisyUI for responsive UI design and integrated React Router for dynamic routing between pages.</li>
              <li>Implemented form validation with React Hook Form, and provided real-time user feedback using react-hot-toast notifications.</li>
            </ul>
          </div>
        </div>

        {/* Experience Heading */}
        <h2 className="text-4xl font-bold mt-8 mb-4 text-left ml-4">Experience</h2>

        {/* Experience Items */}
        <div className="flex flex-col space-y-6">
          {/* NeuroNexus Innovations - Intern */}
          <div className="flex items-start">
            <h3 className="text-xl font-semibold w-1/4 mt-4 text-left">
              NeuroNexus Innovations - Intern <span className="text-gray-300">(March 2023 - April 2024)</span>
            </h3>
            <ul className="list-disc ml-6 w-3/4">
              <li>Developed an interactive platform that allows users to create and participate in quizzes, featuring functionalities for entering questions, selecting multiple-choice answers, and providing immediate feedback upon submission.</li>
              <li>Collaborated with a team of developers to implement user interface enhancements, improving the overall user experience and accessibility of the platform.</li>
            </ul>
          </div>

          {/* Sanskriti Committee - Associate Coordinator */}
          <div className="flex items-start">
            <h3 className="text-xl font-semibold w-1/4 mt-4 text-left">
              Sanskriti Committee, NIT RR - Associate Coordinator <span className="text-gray-300">(Aug 2023)</span>
            </h3>
            <ul className="list-disc ml-6 w-3/4">
              <li>Supported Core Coordinators in planning and executing events, ensuring smooth operations throughout the process.</li>
              <li>Assigned tasks to volunteers based on their strengths and interests, fostering a collaborative and engaging environment.</li>
              <li>Completed tasks assigned by the Coordinators while upholding the organization’s values and maintaining professionalism.</li>
            </ul>
          </div>

          {/* Sanskriti Committee - Volunteer */}
          <div className="flex items-start">
            <h3 className="text-xl font-semibold w-1/4 mt-4 text-left">
              Sanskriti Committee, NIT RR - Volunteer <span className="text-gray-300">(Dec 2022 – July 2023)</span>
            </h3>
            <ul className="list-disc ml-6 w-3/4">
              <li>Enhanced leadership and problem-solving skills by leading teams.</li>
              <li>Ensured the success of Eclectika 2023, providing flexibility and assistance as needed.</li>
              <li>Assisted in planning event programs, including speaker selection, agenda development, and content coordination.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

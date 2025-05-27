import React from "react";

const projects = [
  {
    title: "Chatting App - Real-time Messaging Application",
    url: "https://github.com/Pulishekhar/Chatting-App.git",
    description: [
      "Built a real-time messaging application using the MERN stack, with user authentication, direct messaging, and chat history.",
      "Integrated WebSockets (Socket.io) for instant message delivery and smooth user experience.",
      "User-friendly interface with dynamic message input, real-time notifications, and image sending.",
      "Optimized backend with Express and MongoDB for scalable data storage.",
    ],
    imageSrc:
      "https://www.livechat.com/app/og-app.9cb8caed98d60ab801c695f17c4231fb52f591a5c5055cbc509646d553cb6a72.png",
    imageAlt: "Chatting App Preview",
  },
  {
    title: "Live Quiz Platform",
    url: "https://quizadmin-frontend.onrender.com/",
    description: [
      "Full-stack live quiz streaming website inspired by casino platforms, with polished interactive UX.",
      "React, Tailwind CSS, React Router frontend with real-time quiz popups, wallets, and betting.",
      "User and admin roles for quiz creation, player management, live control, and results.",
      "Real-time chat, toast notifications, and dynamic poker lobby-inspired layout.",
    ],
    imageSrc: "/images/quiz-preview.png",
    imageAlt: "Live Quiz Platform Preview",
  },
  {
    title: "Bookstore Application",
    url: "https://github.com/Pulishekhar/Bookstore.git",
    description: [
      "Full-stack bookstore using React, Node.js, Express, and MongoDB, with categorization and access control.",
      "Responsive UI with Tailwind CSS and DaisyUI, plus dynamic routing via React Router.",
      "Form validation with React Hook Form and real-time feedback using react-hot-toast.",
    ],
    imageSrc: "/images/bookstore-preview.png",
    imageAlt: "Bookstore App Preview",
  },
];

const experiences = [
  {
    title: "NeuroNexus Innovations - Intern",
    date: "March 2023 - April 2024",
    points: [
      "Developed interactive quiz platform with question entry, multiple-choice answers, and immediate feedback.",
      "Collaborated on UI enhancements to improve experience and accessibility.",
    ],
  },
  {
    title: "Sanskriti Committee, NIT RR - Associate Coordinator",
    date: "Aug 2023",
    points: [
      "Supported event planning and execution with smooth operations.",
      "Assigned volunteer tasks to leverage strengths and interests.",
      "Completed tasks maintaining professionalism and organizational values.",
    ],
  },
  {
    title: "Sanskriti Committee, NIT RR - Volunteer",
    date: "Dec 2022 – July 2023",
    points: [
      "Led teams to enhance leadership and problem-solving skills.",
      "Ensured success of Eclectika 2023 with flexibility and support.",
      "Assisted in planning event programs and content coordination.",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen p-8"
      style={{
        backgroundImage: "url('/path/to/your/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-900 bg-opacity-80 text-gray-100 p-6 rounded-lg w-full mt-[80px] mb-[60px] max-w-7xl mx-auto">
        {/* Projects Heading */}
        <h2 className="text-4xl font-bold mb-4 text-left ml-4">Projects</h2>

        {/* Project List */}
        <div className="flex flex-col space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="flex gap-6 flex-col md:flex-row items-start">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="w-full md:w-1/3 h-auto rounded-lg shadow-lg"
              />
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-left">
                  <a
                    href={project.url}
                    className="underline hover:text-gray-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <ul className="list-disc ml-6 text-gray-300 space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Heading */}
<h2 className="text-4xl font-bold mt-12 mb-4 text-left ml-4">Experience</h2>

{/* Redesigned Experience Timeline */}
<div className="relative border-l-4 border-blue-600 ml-6 pl-6 space-y-12">
  {experiences.map((exp, index) => (
    <div key={index} className="relative">
      {/* Timeline Marker */}
      <div className="absolute -left-3.5 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

      {/* Card */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
          <span className="text-sm text-gray-400">{exp.date}</span>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-1">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Projects;

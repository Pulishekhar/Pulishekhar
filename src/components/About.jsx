function About() {
  return (
    <section className="flex justify-center items-center min-h-screen p-8">
      <div className="bg-black bg-opacity-45 text-white p-6 rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Hello!</h1>
        
        <p>
          Hello! My name is Pulishekhar Mulinti, and I’m from Kurnool, Andhra Pradesh. I am currently pursuing a B.Tech in Mining Engineering at the National Institute of Technology, Raipur, and I’m expected to graduate soon. I am passionate about technology and problem-solving, with a focus on frontend development. I enjoy building applications that are both functional and visually appealing, continuously expanding my knowledge in programming and design.
        </p>
        
        <p className="mt-4">
          In my free time, I love watching movies and playing games, which help me relax and get inspired. Feel free to connect with me on 
          <a 
            href="https://twitter.com/Pulishekhar1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-500 transition duration-300 ml-1"
          >
            Twitter
          </a> 
          or 
          <a 
            href="https://instagram.com/pulishekhar5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-400 hover:text-pink-500 transition duration-300 ml-1"
          >
            Instagram
          </a>.
        </p>
      </div>
    </section>
  );
}

export default About;

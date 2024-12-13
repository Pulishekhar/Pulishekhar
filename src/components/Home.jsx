import React from "react";

function Home() {
  const name = "PULISHEKHAR MULINTI";

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/R.jpg')", // Path to your background image
      }}
    >
      <div className="p-8 rounded-md text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold flex flex-wrap justify-center gap-4">
          {name.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="relative inline-block"
            >
              {word.split("").map((letter, index) => (
                <span
                  key={index}
                  className="relative inline-block group transition-transform duration-300 ease-in-out"
                  style={{
                    WebkitTextStroke: "2px white",
                    color: "transparent", // Initially makes the text invisible
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  {letter}
                  {/* Hover effect applied only on the letter itself */}
                  <span
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:text-white"
                    style={{
                      WebkitTextStroke: "0px", // Removes the stroke when hovered
                      color: "white",  // Changes the text color to white on hover
                    }}
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="text-lg sm:text-xl mt-4">A Passionate Developer</p>
      </div>
    </section>
  );
}

export default Home;

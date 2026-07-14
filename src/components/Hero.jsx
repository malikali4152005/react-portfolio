const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="md:w-1/2">

          <p className="text-cyan-400 text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Malik Muhammad Ali
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            React Developer & Software Engineering Student
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Passionate Software Engineering student with an interest in
            Frontend Development. I enjoy building modern, responsive,
            and user-friendly web applications using React.js and
            Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-500 shadow-2xl object-cover"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;
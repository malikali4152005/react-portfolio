const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          I am a Software Engineering student with a passion for creating
          modern and responsive web applications. I enjoy learning new
          technologies and building projects that solve real-world problems.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Education */}

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl duration-300">

            <h3 className="text-2xl font-bold text-cyan-600 mb-4">
              🎓 Education
            </h3>

            <p className="text-gray-600 leading-7">
              BS Software Engineering
              <br />
              COMSATS University Islamabad,
              Wah Campus
            </p>

          </div>

          {/* Internship */}

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl duration-300">

            <h3 className="text-2xl font-bold text-cyan-600 mb-4">
              💼 Internship
            </h3>

            <p className="text-gray-600 leading-7">
              Web Development Intern at
              <br />
              <strong>CoderAxo</strong>
              <br />
              Learning React.js, Tailwind CSS,
              Components, Hooks, Props,
              Routing and API Integration.
            </p>

          </div>

          {/* Goal */}

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl duration-300">

            <h3 className="text-2xl font-bold text-cyan-600 mb-4">
              🚀 Career Goal
            </h3>

            <p className="text-gray-600 leading-7">
              My goal is to become a professional
              Frontend Developer by building
              responsive, scalable and user-friendly
              web applications using modern
              technologies.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
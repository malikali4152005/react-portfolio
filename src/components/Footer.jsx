const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-gray-900 text-white py-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* Name */}

        <h2 className="text-3xl font-bold text-cyan-400 text-center">
          Malik Muhammad Ali
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Software Engineering Student | React Developer
        </p>

        {/* Social Links */}

        <div className="flex flex-wrap justify-center gap-6 mt-8">

          <a
            href="https://github.com/malikali4152005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/malik-muhammad-ali-9bb349321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:malikali4152005@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            Email
          </a>

        </div>

        {/* Back To Top */}

        <div className="flex justify-center mt-8">

          <a
            href="#home"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            ↑ Back To Top
          </a>

        </div>

        {/* Copyright */}

        <div className="border-t border-gray-700 mt-8 pt-6">

          <p className="text-center text-gray-400">
            © {currentYear} Malik Muhammad Ali. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );

};

export default Footer;
const ProjectCard = ({ name, language, url }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

      <h3 className="text-2xl font-bold text-cyan-600">
        {name}
      </h3>

      <p className="text-gray-600 mt-3">
        <strong>Language:</strong> {language || "Not Specified"}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
      >
        View Project
      </a>

    </div>
  );
};

export default ProjectCard;
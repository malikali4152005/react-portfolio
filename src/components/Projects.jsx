import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios
      .get("https://api.github.com/users/malikali4152005/repos")

      .then((response) => {

        setProjects(response.data.slice(0, 6));

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <section
      id="projects"
      className="py-20 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          My Projects
        </h2>

        <p className="text-center text-gray-600 mb-12">
          These projects are fetched dynamically from the GitHub API.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <ProjectCard

              key={project.id}

              name={project.name}

              language={project.language}

              url={project.html_url}

            />

          ))}

        </div>

      </div>

    </section>

  );

};

export default Projects;
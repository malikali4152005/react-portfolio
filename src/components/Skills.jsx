import SkillCard from "./SkillCard";

const Skills = () => {

  const skills = [

    {
      skill: "HTML",
      percentage: 90,
      color: "bg-orange-500",
    },

    {
      skill: "CSS",
      percentage: 85,
      color: "bg-blue-500",
    },

    {
      skill: "JavaScript",
      percentage: 80,
      color: "bg-yellow-500",
    },

    {
      skill: "React.js",
      percentage: 75,
      color: "bg-cyan-500",
    },

    {
      skill: "Tailwind CSS",
      percentage: 80,
      color: "bg-sky-500",
    },

    {
      skill: "Git & GitHub",
      percentage: 70,
      color: "bg-gray-700",
    },

  ];

  return (

    <section
      id="skills"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          My Skills
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Technologies I have learned during my Software Engineering journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((item, index) => (

            <SkillCard
              key={index}
              skill={item.skill}
              percentage={item.percentage}
              color={item.color}
            />

          ))}

        </div>

      </div>

    </section>

  );

};

export default Skills;
const SkillCard = ({ skill, percentage, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between mb-3">

        <h3 className="text-xl font-semibold text-gray-800">
          {skill}
        </h3>

        <span className="font-bold text-gray-600">
          {percentage}%
        </span>

      </div>

      <div className="w-full bg-gray-300 rounded-full h-4">

        <div
          className={`${color} h-4 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>
  );
};

export default SkillCard;
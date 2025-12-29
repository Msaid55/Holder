export default function ChefSkills({ skills }) {
    return (
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-black mb-1 text-sm">
              <span>{skill.label}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-green-700 rounded"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
import { skillsData } from "../../utils/index";

export default function Skills() {
  return (
    <section id="about" className="py-6">
      <h3 className="text-2xl font-semibold mb-3">Skills</h3>
      <div className="flex items-center justify-centedr flex-wrap gap-6">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="p-2 bg-[#0c1f24] rounded-md shadow-sm hover:scale-105 transition"
          >
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

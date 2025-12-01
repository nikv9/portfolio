import { skillsData } from "../../utils/index";

export default function Skills() {
  return (
    <section id="about" className="py-6">
      <h3 className="text-xl font-semibold mb-3">Skills</h3>
      <div className="flex items-center flex-wrap gap-6">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="p-2 bg-[#08131c] rounded-md shadow-sm hover:scale-105 transition cursor-pointer"
          >
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

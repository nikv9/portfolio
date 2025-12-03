export default function Experience() {
  const data = [
    {
      company: "Divyal Technologies Pvt Ltd",
      role: "Software Developer",
      duration: "Sep 2023 - Sep 2025",
      points: [
        "Contributed to EMS and Firstman projects using React.js, Vue.js, Node.js, and Laravel.",
        "Optimized EMS report processing for 100K+ staff, reducing fetch time to 5 seconds.",
        "Collaborated daily with international project managers via scrum meetings.",
      ],
    },
    {
      company: "Bolesale Technologies Pvt Ltd",
      role: "React Developer Intern",
      duration: "May 2023 - Aug 2023",
      points: [
        "Developed seller panel for B2B marketplace using React.js, Redux, and Firebase.",
        "Built product listing, updating, and management features.",
      ],
    },
    {
      company: "Redpositive Service (OPC) Pvt Ltd",
      role: "React Developer Intern",
      duration: "Jun 2022 - Aug 2022",
      points: [
        "Built responsive dashboards and data visualizations for AIVARA platform.",
        "Created interactive UI components improving user experience.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-6">
      <h3 className="text-xl font-semibold mb-4">Experience</h3>

      <div className="flex flex-col gap-4">
        {data.map((exp, index) => (
          <div
            key={index}
            className="p-4 bg-[#08262c] rounded shadow-sm hover:scale-101 transition"
          >
            <h4 className="font-semibold">{exp.company}</h4>
            <p className="text-blue-400 text-sm font-medium">{exp.role}</p>
            <p className="text-gray-400 text-xs mb-3">{exp.duration}</p>

            <ul className="text-gray-300 text-sm space-y-1 ml-4 list-disc">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

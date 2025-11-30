export default function ProjectCard({ title, desc, tech }) {
  return (
    <article className="p-4 bg-white dark:bg-[#072422] rounded shadow-sm">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-500 mb-3">{desc}</p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300 mb-3">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-gray-100 dark:bg-[#05302b] rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

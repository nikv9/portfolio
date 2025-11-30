export default function Intro() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center py-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">Hi — I'm Nikhil.</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I build clean, fast, and responsive web applications using React,
          Node.js, and MongoDB.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            See projects
          </a>
          <a
            href="mailto:youremail@example.com"
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-56 h-56 rounded-2xl bg-linear-to-tr from-blue-400 to-indigo-600 shadow-lg flex items-center justify-center text-white p-4 text-center">
          <div>
            <div className="text-xl font-semibold">React • MERN</div>
            <div className="text-sm opacity-90 mt-2">
              Interactive UIs • REST & GraphQL • Responsive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

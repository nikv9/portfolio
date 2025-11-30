export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          N
        </div>
        <div>
          <h1 className="text-xl font-semibold">Nikhil Kumar</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </p>
        </div>
      </div>

      <nav className="flex items-center gap-8 text-sm">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a
          href="#resume"
          className="ml-2 inline-block px-3 py-1 border border-gray-300 rounded-md text-sm"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

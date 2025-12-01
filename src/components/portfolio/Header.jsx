import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          N
        </div>
        <div className="hidden md:block">
          <h1 className="text-xl font-semibold">Nikhil Kumar</h1>
          <p className="text-xs text-gray-400">Full Stack Developer</p>
        </div>
      </Link>

      <nav className="flex items-center gap-4 md:gap-8 text-sm">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

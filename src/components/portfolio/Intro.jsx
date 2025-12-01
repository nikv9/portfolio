import { FaGithub, FaLinkedin } from "react-icons/fa";
import nikImg from "../../assets/nik.jpg";
import resumePDF from "../../assets/resume.pdf";

export default function Intro() {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center">
        <img
          src={nikImg}
          alt="Nikhil"
          className="w-30 h-30 object-cover rounded-full mb-4 shadow-lg"
        />

        <h2 className="text-2xl font-bold mb-3">Hi, I'm Nikhil.</h2>

        <p className="text-gray-600 text-sm mb-4 text-center">
          Full Stack MERN Developer with 2+ years of experience building modern
          and scalable web applications.
        </p>

        <div className="flex items-center gap-3 mb-4 text-sm">
          <a
            href={resumePDF}
            download="Nikhil_Kumar_Resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-4 mt-2 text-sm">
          <a
            href="https://github.com/nikv9"
            target="_blank"
            className="flex items-center gap-1 text-gray-300 hover:opacity-80"
          >
            <FaGithub size={20} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nikv9"
            target="_blank"
            className="flex items-center gap-1 text-gray-300 hover:opacity-80"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

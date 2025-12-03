import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-6">
      <h3 className="text-xl font-semibold mb-3">Contact</h3>

      <div className="flex items-center gap-4 bg-[#08262c] p-4 rounded-md shadow-sm w-full">
        <div className="flex flex-col gap-4 text-sm text-gray-300">
          <a
            href="mailto:nikkv9@gmail.com"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <FaEnvelope size={16} /> nikkv9@gmail.com
          </a>

          <a
            href="tel:+917440620260"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <FaPhoneAlt size={16} /> +917440620260
          </a>

          <a
            href="https://github.com/nikv9"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <FaGithub size={16} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nikv9"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

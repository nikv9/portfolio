import { useEffect, useState } from "react";
import nikImg from "../../assets/nik.jpg";
import resumePDF from "../../assets/resume.pdf";

const titles = [
  "A Full Stack Developer",
  "A Web Developer",
  "A MERN Stack Developer",
  "A React.js Developer",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stopped, setStopped] = useState(false);

  // stop animation after 30 seconds
  useEffect(() => {
    const stopTimer = setTimeout(() => setStopped(true), 30000);
    return () => clearTimeout(stopTimer);
  }, []);

  useEffect(() => {
    if (stopped) {
      // once stopped, show the primary title and don't run typing
      setText(titles[0]);
      setIndex(0);
      setCharIndex(titles[0].length);
      setIsDeleting(false);
      return;
    }

    const current = titles[index];
    const typingSpeed = isDeleting ? 50 : 100;

    const type = () => {
      if (!isDeleting && charIndex < current.length) {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((ci) => ci + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((ci) => ci - 1);
      } else {
        if (!isDeleting) {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 700);
        } else {
          // move to next title
          setIsDeleting(false);
          setIndex((idx) => (idx + 1) % titles.length);
          setCharIndex(0);
        }
      }
    };

    const timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting, stopped, titles]);

  return (
    <section className="py-8">
      <div className="flex flex-col items-center">
        <img
          src={nikImg}
          alt="Nikhil"
          className="w-30 h-30 object-cover rounded-full mb-4 shadow-lg"
        />

        <h2 className="text-3xl text-center font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
          Hi, I'm Nikhil Kumar
        </h2>

        <p className="text-[white] text-xl mb-4 text-center">
          {text}
          <span>_</span>
        </p>

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
      </div>
    </section>
  );
}

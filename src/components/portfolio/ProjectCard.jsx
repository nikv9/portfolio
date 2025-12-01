import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <article className="p-4 bg-[#08131c] rounded shadow-sm flex-1 hover:scale-101 transition cursor-pointer">
      <h4 className="font-semibold mb-1">{props.title}</h4>
      <p className="text-sm text-gray-500 mb-3">{props.desc}</p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-3">
        {props.demo && (
          <a
            href={props.demo}
            target="_blank"
            className="text-sm px-3 py-2 border rounded hover:bg-[#0b2c2a]"
          >
            <RiExternalLinkLine size={16} />
          </a>
        )}

        {props.github && (
          <a
            href={props.github}
            target="_blank"
            className="text-sm px-3 py-2 border rounded hover:bg-[#0b2c2a]"
          >
            <FaGithub size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

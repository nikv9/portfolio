import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-6">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <ProjectCard
          title="Social Verse (MERN)"
          desc="A social media app with posts, likes, follows."
          tech={["React", "Node", "MongoDB"]}
        />
        <ProjectCard
          title="Todo + Auth"
          desc="A todo app with authentication."
          tech={["React", "Express", "MongoDB"]}
        />
        <ProjectCard
          title="Portfolio"
          desc="This portfolio built with React."
          tech={["React", "Tailwind"]}
        />
        <ProjectCard
          title="E-commerce Demo"
          desc="Minimal checkout flow demo."
          tech={["React", "Stripe"]}
        />
      </div>
    </section>
  );
}

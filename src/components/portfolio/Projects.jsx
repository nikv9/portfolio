import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-6">
      <h3 className="text-xl font-semibold mb-4">Projects</h3>

      <div className="flex flex-wrap gap-4">
        <ProjectCard
          title="Cnectify (Social Media App)"
          desc="A full-stack social media platform with authentication, posting, media uploads, real-time chat, follow requests, friend suggestions, profile editing, and an admin dashboard for user and post management."
          github="https://github.com/nikv9/cnectify_app"
          demo="https://cnectify-app.vercel.app"
        />

        <ProjectCard
          title="Falling Clouds (Typing Game)"
          desc="A React-based typing game featuring falling cloud animations, difficulty modes, timer gameplay, sound effects, and fact-based API integration for an engaging user experience."
          github="https://github.com/nikv9/typing_game_react"
          demo="https://fallingclouds.vercel.app"
        />

        <ProjectCard
          title="File Explorer"
          desc="A React-powered file explorer with folder navigation, dynamic state-based rendering, smooth animations, and a clean UI that simulates a desktop file management experience."
          github="https://github.com/nikv9/file_explorer_app"
          demo=""
        />
      </div>
    </section>
  );
}

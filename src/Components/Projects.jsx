import { motion } from "framer-motion";

const projects = [
  {
    title: "HomeMeal",
    description:
      "A platform connecting home cooks with users looking for affordable and healthy meals.",
    tech: ["React", "Firebase", "Next.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Excel Analytics Platform",
    description:
      "Web app for analyzing Excel data and generating insights visually.",
    tech: ["MERN", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather forecasting app with clean UI and API integration.",
    tech: ["JavaScript", "API"],
    github: "#",
    live: "#",
  },
];

export const Projects =() => {
    return <>
    <section 
    id="Projects"
    className="min-h-screen bg-gradient-to-b from-violet-900 to-black text-white flex items-center px-10 lg:px-24"
    >
     {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#FFCC00] to-white bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

            {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:scale-105 transition duration-300 group"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-600/30 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <a
                href={project.github}
                className="text-sm text-gray-300 hover:text-white"
              >
                GitHub →
              </a>

              <a
                href={project.live}
                className="text-sm bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-3 py-1 rounded-md hover:scale-105 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}

          </div>
    </section>
    </>
}
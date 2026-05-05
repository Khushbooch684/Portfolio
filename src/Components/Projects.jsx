import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "HomeMeal – Food Ordering Platform",
    description:
      "Built a full-stack mobile app connecting home chefs with users. Implemented real-time chat, authentication, and order tracking using Firebase and REST APIs.",
    tech: ["React Native", "Node.js", "Firebase", "Express"],
    github: "#",
    live: "https://youtu.be/4NndUXP0ADU?si=zA3c9qdrSm8nd70l",
    image: "/homemeal.png",
    highlight: "Real-time chat + scalable backend",
  },
  {
    title: "Flood Prediction System",
    description:
      "Developed a machine learning system using XGBoost achieving ~89% accuracy. Integrated real-time APIs and built dashboards for flood risk visualization and alerts.",
    tech: ["React", "Node.js", "MongoDB", "XGBoost", "Python"],
    github: "#",
    live: "#",
    image: "/flood.jpg",
    highlight: "89% ML accuracy + real-time alerts",
  },
  {
    title: "Excel Analytics Platform",
    description:
      "Created a MERN-based platform to process Excel files (500+ records) and generate visual insights. Improved backend efficiency and data handling performance.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    github: "#",
    live: "#",
    image: "/dashboard.png",
    highlight: "Handles 500+ records efficiently",
  },
];

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-gradient-to-b from-violet-900 via-black to-black text-white px-5 sm:px-10 lg:px-24 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ rotateX: 5, rotateY: -5 }}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-purple-500/20 transition"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/20 to-yellow-400/20 blur-xl"></div>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 relative z-10">
              <h3 className="text-xl font-semibold text-yellow-400">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/20 hover:bg-purple-500/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-4 py-2 rounded-full hover:scale-105 transition"
                >
                  Live <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
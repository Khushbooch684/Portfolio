import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaAws
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiMysql
} from "react-icons/si";

const skillData = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "Python", icon: <FaPython />, level: 80 },
      { name: "C++", icon: <span>💻</span>, level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 85 },
      { name: "React Native", icon: <FaReact />, level: 75 },
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90 },
      { name: "Express.js", icon: <SiExpress />, level: 85 },
      { name: "REST APIs", icon: <span>🔗</span>, level: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      { name: "MySQL", icon: <SiMysql />, level: 80 },
      { name: "Firebase", icon: <SiFirebase />, level: 85 },
    ],
  },
  {
    title: "AI/ ML",
    skills: [
      { name: "Machine Learning", icon: <SiMongodb />,level : 30 },
      { name: "Prompt Engineering", icon: <SiMysql />, level : 60 },
      { name: "LLm APIs(OpenAI)", icon: <SiFirebase />, level : 50 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws />, level: 70 },
      { name: "CI/CD", icon: <span>⚙️</span>, level: 65 },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen bg-gradient-to-b from-black to-violet-900 text-white px-5 sm:px-10 lg:px-24 py-16"
    >
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((category, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
              {category.title}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm">
                    <span className="flex gap-2 items-center">
                      {skill.icon} {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-700 rounded mt-1">
                    <div
                      className="h-2 bg-yellow-200 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
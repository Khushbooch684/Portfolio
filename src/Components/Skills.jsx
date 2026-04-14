import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import {Skill} from './Skill';

export const Skills =() => {
    return <>
    <section 
    id="Skills"
    className="min-h-screen bg-gradient-to-b from-black to-violet-900 text-white flex items-center px-10 lg:px-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold">SKILLS</h2>

    <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded"></div>

    <p className="text-gray-400 mt-4">
      A collection of my technical skills and expertise
    </p>
  </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* FRONTEND */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#0f172a]/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-200">
            Frontend
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">

            <Skill icon={<FaHtml5 />} name="HTML" />
            <Skill icon={<FaCss3Alt />} name="CSS" />
            <Skill icon={<FaJs />} name="JavaScript" />
            <Skill icon={<FaReact />} name="React" />
            <Skill icon={<SiTailwindcss />} name="Tailwind" />

          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#0f172a]/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-200">
            Backend
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">

            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiExpress />} name="Express" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiFirebase />} name="Firebase" />

          </div>
        </motion.div>

      </div>
    </section>
    </>
}
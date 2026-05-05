import { motion } from "framer-motion";
import { Stats } from "./Stats";




export const About = () => {

  
  return (
    <section
      id="About"
      className="min-h-screen bg-gradient-to-b from-violet-900 via-black to-black text-white px-5 sm:px-8 lg:px-24 py-16 flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-12 w-full items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* SHORT INTRO (better UX) */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Backend-focused Full Stack Developer passionate about building{" "}
            <span className="text-yellow-400">scalable systems</span> and{" "}
            <span className="text-purple-400">real-world solutions</span>.
          </p>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            I specialize in <span className="text-yellow-400">MERN stack</span>{" "}
            and <span className="text-yellow-400">Spring Boot</span>, with a focus
            on backend performance optimization and API design.
          </p>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Built impactful projects like{" "}
            <span className="text-purple-400 font-semibold">HomeMeal</span> and
            improved query performance by{" "}
            <span className="text-green-400">15–20%</span>.
          </p>

          {/* STATS */}
         <Stats />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {[
            {
              title: "Full Stack",
              desc: "MERN + Backend systems",
            },
            {
              title: "DSA",
              desc: "250+ problems solved",
            },
            {
              title: "Projects",
              desc: "Real-world apps like HomeMeal",
            },
            {
              title: "Learning",
              desc: "Exploring Golang & scalable systems",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 hover:opacity-100 transition"></div>

              <h3 className="text-lg font-semibold text-yellow-400 relative z-10">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 relative z-10">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
import {motion}   from "framer-motion";
import Header from "./Header";
export const About =() => {
    return <>
    
    <section 
    id="About"
    className="min-h-screen bg-gradient-to-b from-violet-900 to-black text-white flex items-center px-10 lg:px-24"
    >
           <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FFCC00] to-white bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am a final-year Computer Science student passionate about building
            scalable and user-friendly web applications. I specialize in{" "}
            <span className="text-yellow-400">MERN stack</span> and{" "}
            <span className="text-yellow-400">Java Spring Boot</span>, and I enjoy
            solving real-world problems using technology.
          </p>

          <p className="mt-4 text-lg text-gray-400">
            I have built projects like{" "}
            <span className="text-purple-400 font-semibold">HomeMeal</span> and an
            Excel Analytics Platform, while also strengthening my problem-solving
            skills through Data Structures and Algorithms.
          </p>
        </motion.div>

        {/* RIGHT SIDE (CARDS) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400">Full Stack</h3>
            <p className="text-sm text-gray-300 mt-2">
              MERN + Spring Boot development experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400">DSA</h3>
            <p className="text-sm text-gray-300 mt-2">
              250+ problems solved on coding platforms
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400">Projects</h3>
            <p className="text-sm text-gray-300 mt-2">
              Real-world applications like HomeMeal
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400">Learning</h3>
            <p className="text-sm text-gray-300 mt-2">
              Always exploring new technologies
            </p>
          </div>

        </motion.div>
      </div>
    </section>
    </>
}
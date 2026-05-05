import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

// IMPORT YOUR IMAGES
import hacknovate from "../assets/hacknovate.png";
import googleCloud from "../assets/google-cloud.png";
import knockout from "../assets/innovators.png";

const achievements = [
  {
    title: "Hacknovate 6.0 Winner 🏆",
    desc: "Winner – Girls Category",
    image: hacknovate,
    file: hacknovate,
  },
  {
    title: "Innovator’s Knockout",
    desc: "Top 10 Teams – ABESIT",
    image: knockout,
    file: knockout,
  },
  {
    title: "Google Cloud Certification",
    desc: "Cloud Foundations & Generative AI",
    image: googleCloud,
    file: googleCloud,
  },
];

export const Achievements = () => {
  return (
    <section
      id="Achievements"
      className="min-h-screen bg-gradient-to-b from-black to-violet-900 text-white px-5 sm:px-10 lg:px-24 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
      >
        Achievements & Certifications
      </motion.h2>

      {/* Scroll container (mobile friendly) */}
      <div className="flex gap-6 overflow-x-auto pb-4">

        {achievements.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] md:min-w-[350px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden group relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition blur-xl"></div>

            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 relative z-10">
              <h3 className="text-lg font-semibold text-yellow-400">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

              {/* Download Button */}
              {/* <a
                href={item.file}
                download
                className="mt-4 inline-flex items-center gap-2 text-sm bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-4 py-2 rounded-full hover:scale-105 transition"
              >
                <FaDownload /> Download Proof
              </a> */}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};
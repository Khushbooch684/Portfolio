import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-gradient-to-b from-black to-violet-900 text-white px-5 sm:px-10 lg:px-24 py-16 flex items-center"
    >
      <div className="w-full grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            Let’s Build Something Together 🚀
          </h2>

          <p className="mt-4 text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-xl hover:text-yellow-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-xl hover:text-yellow-400"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            📧 khushboochauhan6912@gmail.com
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-black/50 border border-white/10 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-black/50 border border-white/10 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-black/50 border border-white/10 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-200 text-black py-3 rounded-md hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import {FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export const Hero_section = () => {
       return <>
       <section id="Home" className="min-h-screen bg-gradient-to-b from-black to-violet-900 flex xl:flex-row flex-col-reverse items-start justify-center lg:px-24 px-10 relative overflow-hidden ">
         {/* left section */}
         <div>
            <motion.h1 
            initial={{opacity : 0, y : 80}}
            animate ={{opacity : 1, y : 0}}
            transition ={{
              type:"spring",
              stiffness:40,
              damping : 25,
              duration : 1.5,
            }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold z-10 mb-6 bg-violet-700 leading-tight bg-clip-text text-transparent">I am <br/><span className="glow-text text-white font-serif font-normal">
  <Typewriter
    words={[
      "Khushboo Chauhan",
      "Full Stack Developer",
      "Problem Solver",
      "DevOps Enthusiast",
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={40}
    delaySpeed={1500}
  />
</span>
            </motion.h1>
            <motion.p 
            initial={{opacity : 0, y : 80}}
            animate ={{opacity : 1, y : 0}}
            transition ={{
              type:"spring",
              stiffness:40,
              damping : 25,
              duration : 1.5,
            }}
            className="text-lg md:text-xl lg:text-2xl text-purple-200 max-w-xl">
              I build scalable full-stack web applications using MERN stack and Java Spring Boot, and apply strong problem-solving skills in Data Structures and Algorithms to create real-world solutions.
            </motion.p>

            {/* cv download button  */}
          <div>
         
            <motion.a href="/Khushboo_resume.pdf"
             download
             initial={{opacity : 0, y : 80}}
            animate ={{opacity : 1, y : 0}}
            transition ={{
              type:"spring",
              stiffness:40,
              damping : 25,
              duration : 1.5,
            }}

              className="inline-flex items-center gap-2 mt-6 px-6 py-3 
            bg-violet-700 text-white font-semibold rounded-full 
             shadow-lg hover:shadow-purple-500/40 
             hover:scale-105 transition-all duration-300 
             cursor-pointer"
            >
              DOWNLOAD CV
              <FiDownload className="w-5 h-5" />
            </motion.a>
         
         </div>
          
         </div>
         <div>

         </div>
        
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]  hidden lg:block opacity-90">
           <Spline scene="https://prod.spline.design/kRuQ38OCPwkfXboN/scene.splinecode" />
      </div>
      
       </section>
       </>
}
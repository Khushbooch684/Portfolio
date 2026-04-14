


import {motion, AnimatePresence}   from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";


export default function Header () {
    const [isOpen, setIsOpen] =useState(false);
    const toggleMenu =() => {
        setIsOpen(!isOpen);
    }
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactform =()=>setContactFormOpen(!contactFormOpen);
    const closeContactform= ()=>setContactFormOpen(!contactFormOpen);

    //show nav icon in mobile view function 

    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (<header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
            {/*my-logo section */}
         <motion.div
           initial={{opacity: 0, x: -50}}
           animate = {{opacity: 1, x: 0}}
           transition={{
            type:"spring",
            stiffness : 100,
            damping : 25,
            delay : 0.3,
            duration : 1.2,
           }}
           whileHover={{ scale: 1.05 }}
          className="flex items-center">
            {/* <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-[#471396] text-xl font-bold mr-3 ">
             K
            </div> */}
            <span className="text-base font-bold bg-gradient-to-r from-[#FFCC00] to-white bg-clip-text text-transparent ">
                Portfolio.
            </span>
         </motion.div>

         {/* my-header components */} 
         <nav className="lg:flex hidden space-x-8 ">
            {["Home","About","Skills","Projects","Achievements","Contact"].map((item,index)=>(
                   
                   <motion.a
                    key={index}
                    initial={{opacity:0, y: -20}}
                    animate ={{opacity: 1, y:0}}
                    transition={{
                        type :"spring",
                        stiffness : 100,
                        damping : 20,
                        delay : 0.7 + index * 0.2,
                    }}
                    className="relative text-[#FFCC00] datk:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                    href={`#${item}`}
                    onClick={()=>{
                    document.getElementById(item).scrollIntoView({behavior: "smooth", block: "start"});
                 }}
                   >{item}
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span></motion.a>
                
            ))}
            
         </nav>

         {/* social icons inside my header */}
         <div className="md:flex hidden items-center space-x-4">
            <a href="https://github.com/Khushbooch684" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                <FaGithub className="w-5 h-5"></FaGithub>
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                <FaInstagram className="w-5 h-5"></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/khushboo-chauhan-ab60b125b" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                <FaLinkedin className="w-5 h-5"></FaLinkedin>
            </a>
         </div>
         {/* hire me button */}
         <div>
        <motion.button 
        initial={{opacity:0, scale: 0.8}}
        animate= {{opacity : 1, scale : 1}}
        transition={{
            delay:1.6,
            duration : 0.8,
            type : "spring",
            stiffness : 100,
            damping : 15,
        }}
        onClick={openContactform}
        className="rounded-sm m-1 px-1 py-1 bg-gradient-to-r from-[#FFCC00] to-gray-100 text-black text-xs font-semibold hover:from-violet-600 hover:to-violet-700 hover:text-white transition-all duration-500 hidden sm:block">
            Hire Me
        </motion.button>
         </div>
         {/* mobile menu button */}

        <div className=" md:hidden flex items-center fixed">
            <motion.button 
            whileTap={{scale : 0.7}}
            className="fixed top-5 right-8 z-50"
            onClick={toggleMenu}>
            {isOpen ? <FiX className="h-5 w-5 top-5 right-10  "/> : <FiMenu className="h-5 w-5 top-5 right-10 "/>}
            </motion.button>

        </div>
        {/* header components appearance in mobile view  */}
       {isOpen && (<motion.div 
       initial={{opacity: 0, height : 0}}
       animate={{
        opacity : isOpen ? 1 : 0,
        height : isOpen ? "auto" : 0,
       }}
       transition={{duration : 0.9}}
        className="md:hidden fixed right-8 top-16 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md p-3 ">
          <nav className="flex flex-col space-y-2 text-sm">
            {["Home","About","Skills","Projects","Achievements"].map((item, index)=>(
                <motion.a
                
                 key={index}
                 href={`#${item}`}
                 onClick={()=>{
                    document.getElementById(item).scrollIntoView({behavior: "smooth", block: "start"});
                    setIsOpen(false);
                 }}
                className="relative cursor-pointer text-gray-300"
  whileHover={{ color: "#a855f7" }} 
                  >{item}
                   {/* Underline */}
                 <motion.span
                 className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"
                   initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0}} />
                  </motion.a>
            ))}

          </nav>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
             <div  className=" flex space-x-5 ">
                 <a href="https://github.com/Khushbooch684" >
                      <FiGithub className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"></FiGithub>
                 </a>
                <a href="#" >
                   <FaInstagram className="h-5 w-5 text-gray-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"></FaInstagram>
                 </a>
                 <a href="https://www.linkedin.com/in/khushboo-chauhan-ab60b125b" >
                    <FaLinkedin className="h-5 w-5 text-gray-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"></FaLinkedin>
                 </a>
             </div>
          </div>
          <div>
            <button onClick={openContactform} className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-black ">
             Contact me
            </button>
          </div>
        </motion.div>)}
        {/* contact form opening  */}
        <AnimatePresence>
        {
            contactFormOpen && (
                <motion.div 
                initial={{opacity : 0}}
                animate ={{opacity: 1}}
                exit = {{opacity : 0}}
                transition={{duration : 0.6}}
                className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4" >
                <motion.div
                initial={{scale:0.8, opacity : 0, y : 30}}
                animate ={{scale: 1, opacity : 1, y : 0}}
                exit = {{scale : 0.8, opacity : 0, y : 30}}
                trasition ={{
                    type: "spring",
                    damping : 30,
                    stiffness : 200,
                    duration : 0.8
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
                >
                    <div className="flex justify-between items-center mb-4 ">
                       <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Get In Touch
                        </h1> 
                        <button onClick={closeContactform}>
                            <FiX 
                            className="w-5 h-5 text-gray-300"
                            ></FiX>
                        </button>
                    </div>
                    {/* input form in contact section */}
                    <form action="" className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input 
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border-gray-600 rounded-lg focus:ring-2 focus:ringviolet-500 focus:border-violet-500 bg-gray-700"
                         />
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input 
                        type="email"
                        id="email"
                        placeholder="Your e-mail"
                        className="w-full px-4 py-2 border-gray-600 rounded-lg focus:ring-2 focus:ringviolet-500 focus:border-violet-500 bg-gray-700"
                         />
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <textarea 
                        rows="4"
                        id="message"
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2 border-gray-600 rounded-lg focus:ring-2 focus:ringviolet-500 focus:border-violet-500 bg-gray-700"
                         />                         
                      </div>
                      <motion.button 
                      type="submit"
                      whileHover={{scale : 1.03}}
                      whileTap={{scale:0.97}}
                      className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md lover:shadow-lg hover:shadow-violet-600">
                        Send Message 
                      </motion.button>
                    </form>

                </motion.div>


                </motion.div>

            )

        }
        </AnimatePresence>

        </div>
    </header>
    )
}
                      
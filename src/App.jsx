import Header from "./Components/Header";
import { ParticlesBackground } from "./Components/ParticlesBackground.jsx";
import { Hero_section } from "./Components/Hero_section";
import {CustomCursor} from "./Components/CustomCursor.jsx";
import {About} from "./Components/About.jsx";
import { Projects } from "./Components/Projects.jsx";
import { Skills } from "./Components/Skills.jsx";


export default function App() {
  
  return (
    <>
      {/*  green dots */}
      <ParticlesBackground></ParticlesBackground>
     
      <Header/>
      <Hero_section></Hero_section>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <CustomCursor></CustomCursor>
    </>)
    
}

import { useHref } from "react-router-dom";
import Contact from "../contact/Contact";
import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };
  

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate">
  <motion.h2 variants={textVariants}>Khushi Sharma</motion.h2>
<motion.h1 variants={textVariants}>FULL-Stack  DEVELOPER</motion.h1>
<motion.div className="buttons" variants={textVariants}><button onClick={() => window.open("https://drive.google.com/file/d/1muPz3wW7T-Eu_2pwI2VrFnpuAv0f3kMN/view?usp=sharing", "_blank")}>Download Resume</button>


    {/* <button onClick={Contact()}>Contact me</button> */}

        </motion.div>
      <motion.img   variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""></motion.img>

         </motion.div>
        
        </div>
        <motion.div className="slidingTextContainer"
           
             variants={sliderVariants}
             initial="initial"
             animate="animate">
            OPEN TO WORK
        </motion.div>
      
        <div className="imageContainer">
        <img src="her.svg" style={{width:650}}></img>
      </div>
    </div>
  )
}

export default Hero

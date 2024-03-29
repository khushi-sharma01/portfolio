import { useRef } from "react";
import "./experience.scss";
import { motion } from "framer-motion";
import { useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "SDE-intern",
    img: "internnuminfo.png",
    desc: (
      <>
        Numeric Infosystem Pvt Ltd (JUNE 2023)
        <br />
        Responsible for developing and maintaining the web and mobile application
        design overall architecture of the web application, understanding and
        implementation of security and data protection
      </>
    ),
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Work-Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Experience;
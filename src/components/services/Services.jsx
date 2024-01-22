import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Crafting digital solutions that foster growth
        </p>
        <hr />
      </motion.div>
      {/* <motion.div className="titleContainer" variants={variants}>
        <div className="title">

          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Projects.
          </h1>
          <button>EXPLORE LEARNING</button>
        </div>
      </motion.div> */}
   <motion.div className="listContainer" variants={variants} style={{ display: "flex" }}>
  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Front-end Development</h2>
    <p>
      Creating engaging and responsive user interfaces with React.js and Next.js for seamless user experiences.
    </p>
    
  </motion.div>

  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>API Integration</h2>
    <p>
      Integrating third-party APIs to enhance application functionality and user experience.
    </p>
   
  </motion.div>

 

  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Database Management</h2>
    <p>
      Efficiently designing database architectures using MySQL and MongoDB, ensuring data integrity, and optimizing performance.
    </p>
   
  </motion.div>

  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Full Stack Development</h2>
    <p>
      Leveraging the MERN stack for robust and scalable web applications with seamless front-end and back-end integration.
    </p>
   
  </motion.div>

  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Data Structures</h2>
    <p>
      Applying knowledge of data structures for efficient algorithm implementation and optimization.
  </p>
  </motion.div>
  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Microsoft Learn Student Ambasaddor</h2>
    <p>
    I lead tech community events, organize workshops, and advocate skill development and certifications.</p>
  </motion.div>
</motion.div>

</div>
  );
};

export default Services;

import { useRef } from "react";
import "./portfolio.scss";
import { motion } from "framer-motion";
import { useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "MedBazzar",
    img: "meddbazzar.png",
     desc: "It is an ecommerce built using Node.js and React, offers a user-friendly experience. Featuring admin and user interfaces, and backed by MySQL for robust database management, it provides a seamless online solution for ordering prescription medicines and healthcare products.",
  },
  {
    id: 2,
    title: "E-Vaidya",
    img: "e-vaidya.png",
    desc: "E-Vaidya is a comprehensive online doctor appointment system, featuring interfaces for administrators, users, and doctors. Developed using the MERN stack (MongoDB, Express.js, React, Node.js), this platform facilitates seamless interactions. Experience a modern solution for scheduling medical appointments, ensuring efficient healthcare services.",
    demolink: "https://evaidya-kb.onrender.com/",
    githublink: "https://github.com/khushi-shrama/Production-Doctor-Appointment-system"
  }
  ,
  {
    "id": 3,
    "title": "Flex-Fit",
    "img": "flexfit.png",
    "desc": "Flex-Fit is a Kotlin-based mobile application that revolutionizes your fitness routine. Calculate your BMI, track exercise history, and engage in guided workouts. The app features a dynamic timer for seamless transitions between exercises and rest intervals. Elevate your fitness journey with Flex-Fit – your personalized companion for a healthier lifestyle.",
    githublink:"https://github.com/khushi-shrama/Flex-Fit/tree/master/app",
    
  }
,  
{
  id: 4,
  title: "VKS ShopSMART",
  img: "vpk.png",
  desc: "VIPIN Kirana Store - Your One-Stop Online Grocery Shopping Solution! At VIPIN Kirana Store, we are revolutionizing the way you shop for groceries. Our full-stack website combines cutting-edge technology with the comfort of your local neighborhood store, technologies used are ReactJS, Node JS, Express JS",
  demolink: "https://vipinkirana.in/",
  
}
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
            <div >
            <button style={{ margin: 20 }} onClick={() => { window.open(item.demolink) }}>See Demo</button>
{item.githublink ? (
  <button style={{ margin: 20 }} onClick={() => { window.open(item.githublink) }}>Github Link</button>
) : (
  <button style={{ margin: 20 }} onClick={() => { alert("Github link not present due to company policiescls") }}>Github Link</button>
)} </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
        <h1>Projects I have worked on</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
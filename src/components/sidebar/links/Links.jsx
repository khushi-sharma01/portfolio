import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
     
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Homepage",
    "Skills",
    "Experience",
    "Contact",
    
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`#${item}`}
        >
        {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

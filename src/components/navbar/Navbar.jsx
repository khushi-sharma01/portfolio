import "./navbar.scss"
import {motion} from 'framer-motion'
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">

        {/* {Sidebar} */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}}></motion.span>
            <div className="social">
                <a href="https://github.com/khushi-shrama" target="_blank"><img src="github.png"></img></a>
                <a href="https://www.linkedin.com/in/khushisharma11/"  target="_blank"><img src="linkedin.png"></img></a>
                <a href="#" target="_blank"><img src="instagram.png"></img></a>
                <a href="#" target="_blank"><img src="youtube.png"></img></a>
                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar

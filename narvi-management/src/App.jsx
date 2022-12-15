import AllRoutes from './Routes/AllRoutes';
import Holidayheader from './Components/Holidayheader';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Style from './App.module.css';
import { motion } from "framer-motion";

function App() {
  // 
  // 
  // 
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke:"#FFFFFF",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#7FD957",
      stroke:"#7FD957",
      transition:{
        default: { duration: 2, ease: "easeInOut",repeat: Infinity,
        repeatType:"loop", repeatDelay: 1},
        fill: { duration: 2, ease: [1, 0, 0.8, 1],repeat: Infinity,
          repeatType:"loop", repeatDelay: 1},
        repeat: Infinity,
        repeatType:"loop",
      }
    }
  }
  const icon1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke:"#FFFFFF",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#0E6131",
      stroke:"#0E6131",
      transition:{
        default: { duration: 2, ease: "easeInOut",repeat: Infinity,
        repeatType:"loop", repeatDelay: 1},
        fill: { duration: 2, ease: [1, 0, 0.8, 1],repeat: Infinity,
          repeatType:"loop", repeatDelay: 1},
        
      }
    }
  }
  // 
  // 
  // 
  return (
    <div className={Style.App}>
      <Holidayheader />
      <Navbar />
      <AllRoutes />
      <div>
      <svg x="0px" y="0px" viewBox="0 0 700 700">
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          d="M189.3,500c0-31.8,0-84.9,0.1-116.6c0-31.8,0.1-84.9,0.1-116.7c0.6-0.4-0.6,0.4,0,0
	              c24.8,24.9,50.4,49.3,75.1,74.3c1.9,1.9,2.9,5.5,2.9,8.3c0.2,22.2,0.2,44.5,0,66.7c0,4.3,1.2,5.4,5.5,5.4
	              c22.4-0.2,44.8-0.2,67.2,0.1c2.7,0,6,1.4,8,3.3c24.7,25.1,51.2,48.9,74.6,75c-41.1,0.1-82.2,0.2-123.3,0.3
	              C262.7,500,226,500,189.3,500z"/>
        <motion.path
          variants={icon1}
          initial="hidden"
          animate="visible"
          d="M137.9,500H57.1c0.1-116.4,0.2-232.9,0.4-349.3c26.8,26.7,53.7,53.4,80.5,80.1
	              C137.9,320.5,137.9,410.3,137.9,500z"/>
        <motion.path
          variants={icon1}
          initial="hidden"
          animate="visible"
          d="M137.9,173.4c-26.8-26.7-53.7-53.4-80.5-80.1C57.3,71,57.2,48.7,57,26.5c27,27.1,54,54.1,81,81.2
	              C138,129.5,138,151.5,137.9,173.4z"/>
      </svg>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import project4 from "../../assets/images/project4.png"
import project5 from "../../assets/images/project5.png"
import project6 from "../../assets/images/project6.png"
import { Link } from 'react-router-dom'
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
function Projets() {
    const {ref,inView}=useInView();
    return (
        <div ref={ref} id="projets">
           <hr></hr>
           <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        
        <motion.h1  animate={{x:inView?[200,0]:0}} class="font-bold  text-3xl mb-3 md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check my Projects
        </motion.h1>
        </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
       
        <div class="w-full shadow-xl bg-white rounded-lg flex flex-col justify-center items-center">
        
        
          <img class=" object-cover   hover:scale-110 transition duration-300 ease-in-out" src={project1} alt="photo"></img>
           
               
           
        </div>
        

        
        <div class="w-full shadow-xl bg-white rounded-lg flex flex-col justify-center items-center">
          <a href='https://ismailchebaane.github.io/tlawjTal9a/'>
              <img class=" object-cover   hover:scale-110 transition duration-300 ease-in-out" src={project2} alt="photo"></img>
       </a>
          
           
        </div>

          
        <div class="w-full shadow-xl bg-white rounded-lg flex flex-col justify-center items-center">
          <a href='https://barakat.netlify.app'>
              <img class=" object-cover   hover:scale-110 transition duration-300 ease-in-out" src={project3} alt="photo"></img>
       </a>
           
           
        </div> 
        
    
        <div class="w-full shadow-xl bg-white rounded-lg flex flex-col justify-center items-center">
          <a href="https://ismailchebaane.github.io/tindog/">  
             <img class=" object-cover   hover:scale-110 transition duration-300 ease-in-out" src={project6} alt="photo"></img>
         </a>
        
           
        </div>
        
    </div>
</section> 
        </div>
    )
}

export default Projets

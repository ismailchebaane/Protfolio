import React from 'react';
import compt from "../../assets/images/computer.png"
import SendIcon from '@mui/icons-material/Send';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import StorageIcon from '@mui/icons-material/Storage';
import Icon from '@mui/material/Icon';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import About from "../About/About"
import Skills from "../Skills/Skills"
import Qualification from '../Qualification/Qualification';
import Projets from '../Projets/Projets';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import {motion}from "framer-motion"
import Typical from 'react-typical'
import {useInView} from "react-intersection-observer"
import resume from "../../assets/Resume Copy.pdf"
const Home = () => {
  const {ref,inView}=useInView();
    return (
        <div  className='mt-[70px] form-area'>
  


<div class="area" >
<div className=''>
      <div className="inline-block div-context  ml-[150px]  mt-[150px]">
        <h1 className='text-white text-h1 mb-4 text-[30px] font-bold'>Welcome to my Portfolio</h1>
       <h1 className="inline-block text-h12 max-w-lg text-[50px] text-white font-bold"> Hi! I'm  <span>Ismail</span> 
       <Typical
        steps={['Full Stack',  1500,'Web Developer',1500]}
        loop={Infinity}
        wrapper="p"
      />
       </h1>
    <p className="text-gray-800 texttext mt-8 text-p font-bold max-w-lg"> Full stack Web developer, with  few years of experience and working with new frameworks such like ReactJs NodeJs ,High level experience and producing quality work.

</p>
    <div className="inline-block box-buttonhome mt-8  lg:mt-8">
    
    <motion.button whileHover={{scale:1.1}}
        type="button"
          >
       <a href="#contact"  class="border  border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
   > Contact Me <SendIcon /></a>   </motion.button>
    
    
     <motion.button whileHover={{scale:1.1}}
        type="button"
         >
      <a href={resume} download="ismailchebaane"
       class="border  border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
       >  Download CV   <FileDownloadIcon /></a>
      </motion.button>
   
   

    </div>
    
     </div>
   <motion.div animate={{x:[-800,800,0]}} className="inline-block">
    <img className="h-[300px] imagecomputer " src={compt}alt="computer"></img>
      
    </motion.div>


   </div>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        
<div className="about-section">
<hr className="hr-about h-16 mt-[-10px] "></hr>
<div className='w-full'>
<div className="w-md serc bg-slate-50   h-full rounded-3xl mt-[-70px] ml-10   mr-10">
 <h1 className="text-[35px] serich1 ml-[500px] pt-9 mb-1 font-bold">Our Services</h1>

 
 <div  ref={ref} className='services mt-9 mb-9   inline-block'>
  
 
 


 <motion.article animate={{x:inView?[-800,0]:0}} class="mx-6 article art1 bg-zinc-200 inline-block max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          
             <div className="mx-44 objct inline-block mt-5"><DataObjectIcon fontSize="large" /></div>
             <h1 className="font-bold px-16 mt-4 mb-6 text-xl">Frontend Web Developer</h1>
             <p className="px-10 tracking-widest"> Frontend web developer working with Html, css,React,bootstrap ,Tailwindcss ,Framer motion and still working on other technologies</p>
          
               </motion.article>

 <motion.article animate={{y:inView?[-200,0]:0}} class="mr-6 article bg-zinc-200 inline-block max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
             
             <div className="mx-44 objct inline-block mt-5"> <StorageIcon fontSize="large" /></div>
             <h1 className="font-bold px-16 mt-4 mb-6 text-xl">Backend Web Developer</h1>
             <p className="px-10 tracking-widest"> Backend web developer working with NodeJS, js, express, npm, terminal, sql, MongoDB,  Mongoose and still working on other technologies</p>
            
               </motion.article>
            <motion.article animate={{x:inView?[800,0]:0}} class="mr-6 article bg-zinc-200 inline-block max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
             
             <div className="mx-44 objct inline-block mt-5"> <StorageIcon fontSize="large" /></div>
             <h1 className="font-bold px-28 mt-4 mb-6 text-xl"> Web Designer </h1>
             <p className="px-10 tracking-widest"> im still trying to free  some time for studying  web design ,this feature isn't available now but  it will  be available  as soon as possible </p>
           
              
               </motion.article>

 </div>



</div>


</div>



</div>


<About />


<div ref={ref} className="skills " id="skills">
<hr className="skillshr h-10 "></hr>
<div className='h-full divdivdiv w-full px-14'>
<div className=' h-full pb-14 div-skillss mt-[-30px] rounded-3xl w-full '>
<div className="flex justify-center "> <motion.h1  animate={{x:inView?[-900,0]:0}} className="text-black mt-6 mb-1 text-4xl font-bold">Skills</motion.h1></div>
<div className="flex justify-center"><motion.p  animate={{x:inView?[900,0]:0}} className="text-gray-500">My technical level</motion.p></div>
<Skills />
</div>

</div>
</div>

<div className="Qualification-containerr">
<Qualification />

</div>

 
<div className="projetss">
  <Projets /> 

</div>



<div className="Contactme">
 <ContactUs />

</div>


    </div>
    );
};

export default Home;
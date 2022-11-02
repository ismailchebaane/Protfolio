import React from 'react'
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
function Qualification() {
    const {ref,inView}=useInView();
    return (
        <div>
        <section ref={ref} class="qualification__section mt-9 pb-9">
            <motion.h2  animate={{x:inView?[200,0]:0}} class="section__title marginmargin mr-[50px] font-bold text-3xl">Qualification</motion.h2>
            <motion.span animate={{x:inView?[-200,0]:0}} class="section__subtitle marginmargin mr-[50px] text-gray-500">My personal journey</motion.span>

            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div class="qualification__button button--flex qualification__active" data-target='#education'>
                       
                    <i class='bx bxs-graduation qualification__icon flex justify-around' />
                       <h1 className='text-xl'> Education</h1>
                    </div>

                </div>

                <div class="qualification__sections">
             <div class="qualification__content qualification__active" data-content id="education">
             <div  class="qualification__data ">
                 <motion.div  animate={{x:inView?[-400,0]:0}} className=''>
                     <h3 class="qualification__titlee flex justify-end font-bold">Backend web dev</h3>

                     <div class="qualification__subtitlee flex justify-end text-sm mb-2">Online</div>
                     <div class="qualification__calendar flex justify-end">
                     <i class='bx bx-calendar'></i>
                        2021 - 2022
                     </div>
                     
                 </motion.div>

                 <div>
                     <span class="qualification__rounder"></span>
                     <span class="qualification__line"></span>
                 </div>
             </div>
             
              <div class="qualification__data">
                <div></div>
                <div>
                   <span class="qualification__rounder"></span>
                   <span class="qualification__line"></span>
                </div>

                <motion.div  animate={{x:inView?[400,0]:0}}>
                    <h3 class="qualification__titlee font-bold">Frontend web dev</h3>
                    <span class="qualification__subtitle">Online</span>
                    <div class="qualification__calendar">
                    <i class='bx bx-calendar'></i>
                       2020 - 2021
                    </div>
                </motion.div>
            </div> 
          <div class="qualification__data">
                <motion.div animate={{x:inView?[-400,0]:0}}>
                    <h3 class="qualification__tiitle flex justify-end font-bold">Computer Science</h3>
                    <div class="qualification__subtitlee flex justify-end ml-6  text-sm  mt-2 mb-4 ">Faculty of science of monastir</div>
                    <div class="qualification__calendar flex justify-end">
                    <i class='bx bx-calendar'></i>
                       2020 - present
                    </div>
                </motion.div>

                <div>
                    <span class="qualification__rounder"></span>
                    <span class="qualification__line"></span>
                </div>
            </div> 

            <div class="qualification__data">
                <div></div>
                <div>
                    <span class="qualification__rounder"></span>
                   <span class="qualification__line"></span> 
                </div>

                <motion.div animate={{x:inView?[400,0]:0}}>
                    <h3 class="qualification__titlee font-bold">Bac info </h3>
                    <span class="qualification__subtitle">Lycee Teboulba</span>
                    <div class="qualification__calendar">
                    <i class='bx bx-calendar'></i>
                       2019 - 2020
                    </div>
                </motion.div>

                
            </div>
            </div>
            
           
             
               </div>
            </div>
        </section>
      
            </div>    
    )
}

export default Qualification

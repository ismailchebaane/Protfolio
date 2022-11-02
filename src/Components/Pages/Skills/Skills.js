import React from 'react'
import 'boxicons'
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
function Skills() {
    const {ref,inView}=useInView();
    return (
        <div ref={ref}>
         
         <section class="justify-center flex mt-14 skilsss" id="skills">
          

                <div class="skills__container mr-10 max-w-4xl  ">    
                  <motion.h1  animate={{y:inView?[-150,0]:0}} className="text-xl font-bold mb-1">Frontend</motion.h1> 
                 <div className=" justify-around flex mb-4"><hr className="h-1 w-16  bg-black"></hr></div>     
                    <div className=" max-w-xl min-w-md ">
                             <motion.div animate={{x:inView?[-250,0]:0}} class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5  bx-tada skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-240,0]:0}} class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3  bx-tada skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-230,0]:0}} class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript  bx-tada skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-220,0]:0}} class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript  bx-tada skills__icon' ></i>
                                <span class="skills__name">jQuery</span>
                            </div>
                            <div class="skills__bar skills__jq">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-210,0]:0}} class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-react  bx-tada skills__icon' ></i>
                                <span class="skills__name">ReactJs</span>
                            </div>
                            <div class="skills__bar skills__rc">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">80%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-200,0]:0}} class="skills__data">
                            <div class="skills__names">
                           
                                <i class='bx bxl-bootstrap  bx-tada skills__icon'></i>
                                <span class="skills__name">Bootstrap</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-190,0]:0}} class="skills__data">
                            <div class="skills__names">
                          
                                <i class='bx bxs-file-css  bx-tada skills__icon'></i>
                                <span class="skills__name">Tailwindcss</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[-180,0]:0}} class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint  bx-tada skills__icon' ></i>
                                <span class="skills__name">Framer motion</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div>              
                    </div>
                </div>
            

             <div class="skills__container  max-w-4xl">          
                    <div>
                    <motion.h1 animate={{y:inView?[-150,0]:0}} className="text-xl font-bold mb-1">Backend</motion.h1> 
                 <div className=" justify-around flex mb-4"><hr className="h-1 w-16  bg-black"></hr></div>     
           
                             <motion.div animate={{x:inView?[250,0]:0}} class="skills__data">
                            <div class="skills__names">
                            
                                <i class='bx bxl-nodejs  bx-tada skills__icon'></i>
                                <span class="skills__name">NodeJs</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[230,0]:0}} class="skills__data">
                            <div class="skills__names">
                          
                                <i class='bx bx-server  bx-tada skills__icon'></i>
                                <span class="skills__name">Express</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[210,0]:0}} class="skills__data">
                            <div class="skills__names">
                        
                           
                                <i class='bx bx-code-block  bx-tada skills__icon' ></i>
                                <span class="skills__name">Terminal,npm</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[190,0]:0}} class="skills__data">
                            <div class="skills__names">
                          
                                <i class='bx bx-cylinder  bx-tada skills__icon'></i>
                                <span class="skills__name">SQL</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[170,0]:0}} class="skills__data">
                            <div class="skills__names">
                      
                            <i class='bx bxs-cylinder  bx-tada skills__icon'></i>
                                <span class="skills__name">MongoDB,Mongoose</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[150,0]:0}}class="skills__data">
                            <div class="skills__names">
                           
                                <i class='bx bx-cylinder  bx-tada skills__icon' ></i>
                                <span class="skills__name">PHP</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </motion.div>
                      
                    </div>
                    
                    <div>              
                    </div>
                </div>


    </section>


            <div class="justify-center flex mt-14 skilsss">
            <div class="skills__container  max-w-4xl">          
                    <div ref={ref}>
                    <motion.h1 animate={{y:inView?[-100,0]:0}} className="text-xl font-bold mb-1">Other Skills</motion.h1> 
                 <div className=" justify-around flex mb-4"><motion.hr animate={{y:inView?[100,0]:0}} className="h-1 w-16  bg-black"></motion.hr></div>     
                 <motion.div animate={{x:inView?[250,0]:0}} class="skills__data">
                            <div class="skills__names">
                        
                           
                            <box-icon  size="md" animation='tada' name='python' type='logo' ></box-icon>
                                <span class="skills__name ml-4">python</span>
                            </div>
                            <div class="skills__barr skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </motion.div>
                




                             <motion.div animate={{x:inView?[-250,0]:0}} class="skills__data">
                            <div class="skills__names">
                            <box-icon size="md" name='c-plus-plus' type='logo' animation='tada' ></box-icon>
                              
                                <span class="ml-4  skills__name">C,C++,C#</span>
                            </div>
                            <div class="skills__barr  skills__jq">

                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </motion.div>
                        <motion.div animate={{x:inView?[250,0]:0}} class="skills__data">
                            <div class="skills__names">
                          
                            <box-icon size="md" animation='tada' type='logo' name='java'></box-icon>
                                <span class="skills__name ml-4">Java</span>
                            </div>
                            <div class="skills__barr skills__jq">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </motion.div>
                       
                       
                      
                    </div>
                    
                    <div>              
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Skills

import {React,useState} from 'react'

import {motion} from "framer-motion"
function Footer() {
 
    return (
        <div>
            <footer >
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic " >About us</div>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
         <p className="brand"> <a href="tel:+23851138"><i class="fas fa-phone-volume pr-2"></i>+23851138</a>
     </p>     </div>
         <div class="email brand">
           <a href="mailto:chebaaneismail@gmail.com"><i class="fas fa-envelope pr-2"></i>chebaaneismail@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <div className='brand'><a href="#">Frontend web developer</a></div>
       <div className='brand'><a href="#">Backend web developer</a></div>
       <div className='brand'><a href="#">lorem is the wbe dev</a></div>
       <div className='brand'><a href="#">lorem is the wbe dev</a></div>
       <div className='brand'><a href="#">lorem is the wbe dev</a></div>
       <div className='brand'><a href="#">lorem is the wbe dev</a></div>
     </div>
     <div class="right box">
       <div class="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"></input>
         <input type="submit" name="" value="Send"></input>
         <div class="media-icons">
           <motion.a  whileHover={{scale:1.2,y:"-20px"}} href="https://www.facebook.com/ismail.chebane"><i class="fab fa-facebook-f"></i></motion.a>
           <motion.a   whileHover={{scale:1.2,y:"-20px"}}  href="https://www.instagram.com/ismail_chebane/"><i class="fab fa-instagram"></i></motion.a>
           <motion.a   whileHover={{scale:1.2,y:"-20px"}}  href="https://twitter.com/ismailchebaane2"><i class="fab fa-twitter"></i></motion.a>
          
           <motion.a   whileHover={{scale:1.2,y:"-20px"}}  href="https://www.linkedin.com/in/ismail-chebaane-555b75146"><i class="fab fa-linkedin-in"></i></motion.a>
         </div>
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2022 <a href="#">ChebaaneIsmail</a> All rights reserved</p>
   </div>
 </footer>

        </div>
    )
}

export default Footer

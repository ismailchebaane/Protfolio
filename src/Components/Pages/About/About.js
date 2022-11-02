import React from 'react'
import image from '../../assets/images/imagehome.jpg'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
function About() {
    return (
        <div className="about-secction px-40 py-10   " id="about">
            <div className="about-about   rounded-3xl w-full mt-20 h-full  ">
              <h1 className='text-black text-4xl font-bold text-center pt-8'> About Me</h1>
             <div className="flex justify-center pb-10"><hr className="w-24  h-1 bg-black text-center"></hr></div>
         <div className="flex justify-between abtabt ">
             <div className="image-about py-9 flex">
    <img className="max-w-xs ml-40 myimage" src={image} alt=''></img>
      </div>
      <div className="about-content px-9 mt-9 ">
  <p className="max-w-md text-gray-500 ">Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.</p>
     <div className="experience flex justify-around mt-9">
     <div className="frist ml-[-120px]"><h1 className="text-black font-bold text-2xl">02+</h1>  <p className="text-gray-500  ">Years of <br></br> experience</p> </div>
     <div  className=" ml-[-100px]"><h1 className="text-black font-bold text-2xl">07+</h1>  <p className="text-gray-500 max-w-xs">Completed <br></br> projects</p> </div>
  
     </div>
     <button
        type="button"
        className="dwonloadbtnabt border mt-6 ml-[-05px]  border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        Download CV   <FileDownloadIcon />
      </button>
      </div> 
      </div>
            </div>
  
        </div>
    )
}

export default About

import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function About() {
  return (
    <div>
        
        
          <h1 className=' text-7xl flex justify-center mt-44 font-semibold'>
            <span className=' text-blue-700 mr-5'>Excel</span>
            <span className=' text-red-700'> Infosys</span>
             </h1>
          <h3 className=' text-center text-2xl mt-5'>Computer Store In Ahmedabad</h3>
            
          <div className=' flex justify-center mt-9 pr-20'>
             <div className='text-2xl' >
              <i class="fa-solid fa-phone"></i>
             </div>
                  <button className=' text-2xl  font-extrabold ml-3'>
                  <Link to="tel:+919725760694">+919725760694</Link>

                  </button>

          </div>
            
            <div className="flex justify-center items-center mt-10 rounded-sm">
            <img src="../src/Images/main image.JPG" alt="main img" class=" w-4/5 h-auto rounded-lg "/>
            </div>


        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center'>
            <div className="max-w-sm mt-12">
              <div className="bg-black rounded-xl overflow-hidden shadow-md mx-auto my-3">
                 <div className="flex justify-center ">
                   <img className="h-42 w-45 object-contain" src="../src/Images/IMG1.jpg" alt="Logo" />
                  </div>
               </div>
             </div>

             <div className="max-w-sm mt-12">
              <div className="bg-black rounded-xl overflow-hidden shadow-md mx-auto my-3">
                 <div className="flex justify-center ">
                   <img className="h-42 w-45 object-contain" src="../src/Images/IMG2.jpg" alt="Logo" />
                  </div>
               </div>
             </div>

            <div className="max-w-sm mt-12">
              <div className="bg-black rounded-xl overflow-hidden shadow-md mx-auto my-3">
                 <div className="flex justify-center ">
                   <img className="h-42 w-45 object-contain" src="../src/Images/IMG3.jpg" alt="Logo" />
                  </div>
               </div>
             </div>



             <div className="max-w-sm mt-12">
              <div className="bg-black rounded-xl overflow-hidden shadow-md mx-auto my-3">
                 <div className="flex justify-center ">
                   <img className="h-42 w-45 object-contain" src="../src/Images/IMG4.jpg" alt="Logo" />
                  </div>
               </div>
             </div>


            <div className="max-w-sm mt-12">
              <div className="bg-black rounded-xl overflow-hidden shadow-md mx-auto my-3">
                 <div className="flex justify-center ">
                   <img className="h-42 w-45 object-contain" src="../src/Images/IMG5.jpg" alt="Logo" />
                  </div>
               </div>
             </div>

              <div className="max-w-sm mt-12">
              <div className="bg-black rounded-xl overflow-hidden shadow-md mx-auto my-3">
                 <div className="flex justify-center ">
                   <img className="h-42 w-45 object-contain" src="../src/Images/IMG6.jpg" alt="Logo" />
                  </div>
               </div>
             </div>
        </div>
           
                  <h1 className='flex justify-center font-bold text-5xl mt-14 mb-12 text-blue-950 underline ... '> TESTIMONIALS</h1>
                    <Rating/>
      </div>
  )
}

export default About
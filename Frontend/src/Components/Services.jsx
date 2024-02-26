import React from 'react';


function Services() {
  return (
    <div className='mt-10'>
      <h1 className="text-5xl font-bold text-slate-600 text-center mb-8 text-decoration-line: underline"> <span className='text-red-700'>Why</span> Choose Us!!</h1>
      
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center  mt-24'>
        <div className="max-w-sm ">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg mx-auto">
            <div className="flex justify-center pt-6">
              <img className="h-12 w-12 object-contain" src="../src/Images/think.png" alt="Logo" />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-center font-bold text-2xl">Best Quality Solution.</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm">
          <div className="bg-white rounded-xl overflow-hidden shadow-md mx-auto">
            <div className="flex justify-center pt-6">
              <img className="h-12 w-12 object-contain" src="../src/Images/fast.png" alt="Logo" />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-center font-bold text-2xl">Time to Time Solution.</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm">
          <div className="bg-white rounded-xl overflow-hidden shadow-md mx-auto">
            <div className="flex justify-center pt-6">
              <img className="h-12 w-12 object-contain" src="../src/Images/remoteservice.png" alt="Logo" />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-center font-bold text-2xl">Remote Service Solution.</p>
            </div>
          </div>
        </div>
      </div>

      {/* what we offer start */}

    
              <div className= "  mt-24 ">
                
                <h1 className="text-5xl font-bold text-slate-600 text-center mb-8 text-decoration-line: underline">   
                  <span className=' text-red-700'>What </span>
                         We Offer ?..</h1>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center mt-24'>
                    <div className="max-w-sm">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md mx-auto">
                        <div className="flex justify-center pt-6">
                          <img className="h-12 w-12 object-contain" src="../src/Images/delivery.png" alt="Logo" />
                       </div>
                          <div className="p-10 shadow-3xl">
                           <p className="text-gray-700 text-center font-bold text-2xl">Same Day Delivery</p>

                         </div>
                        </div>
                     </div>

                     <div className="max-w-sm">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md mx-auto">
                        <div className="flex justify-center pt-6">
                          <img className="h-12 w-12 object-contain" src="../src/Images/in store shopping.png" alt="Logo" />
                       </div>
                          <div className="p-10 shadow-3xl">
                           <p className="text-gray-700 text-center font-bold text-2xl">In Store Shopping Available</p>

                         </div>
                        </div>
                     </div>


                      <div className="max-w-sm">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md mx-auto">
                        <div className="flex justify-center pt-6">
                          <img className="h-12 w-12 object-contain" src="../src/Images/onsiteservice.png" alt="Logo" />
                       </div>
                          <div className="p-10 shadow-3xl">
                           <p className="text-gray-700 text-center font-bold text-2xl">On Site Service Available</p>

                         </div>
                        </div>
                     </div>

                  </div>

                </div>            

    </div>
  );
}

export default Services;

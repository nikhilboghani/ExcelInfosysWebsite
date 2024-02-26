import React from 'react';
import Map from './Map';

function Contact() {
    return (
        <section className="bg-white py-8">

           <h1 className=' mt-40 flex justify-center text-5xl font-bold  text-decoration-line: underline  '>
               <i class="fa-solid fa-phone pr-5"> </i>
                 Contact Us!</h1>
            
           

            <div className="container mx-auto  mt-32">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 px-4">
                       
                       <Map/>

                        {/* Mobile Numbers */}

                        <div className="mb-4 ">

                            <button>
                            <h2 className="text-2xl font-bold mb-2 rounded-lg py-2 px-2 mt-4 bg-slate-200 "> Our Contact Numbers</h2>

                            </button>
                            <p>
                               <i class="fa-solid fa-phone pr-6 mb-3 text-xl  ">  097257 60694 </i><br/>
                               <i class="fa-solid fa-phone pr-5 text-xl" > 097237 92923 </i>

                            </p>
                           
                        </div>
                        {/* Working Hours */}
                        <div className='mb-3 py-9'>
                          <button>

                            <h2 className="text-2xl font-bold mb-2 rounded-lg  px-2 mt-4 bg-slate-200 ">Working Hours</h2>
                          </button>
                         
                           <div className='text-xl font-bold'>
                               <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>   Saturday       : 10:00 AM - 4:00 PM</p>
                            <p>Sunday            : Closed</p>
                           </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

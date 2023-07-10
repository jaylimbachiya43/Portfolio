'use client'
import React, { useState, useEffect } from 'react'
import Landingicon from "../../../public/landingicon.svg";
import axios from 'axios';



const Experiencepage  = () => {

  const [experience, setExperience] = useState([]);
  const [experiencelist, setExperiencelist] = useState([])
  
  useEffect(() => {
     // fetch data
     fetchdata();
  
  }, []);

  useEffect(()=>{
    fetchlistdata();
  },[])

  const fetchdata = async () => {
    try {
      const response =await axios.get("http://localhost:1337/api/company-experiences");
     console.log(response);
      setExperience(response.data.data)
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  const fetchlistdata = async () => {
    try {
      const response =await axios.get("http://localhost:1337/api/experiencelists");
     console.log(response);
     setExperiencelist(response.data.data)
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }
  console.log(experience);
  return (
    <section  className='bg-black text-white py-14 px-12 lg:py-28 lg:px-48 grid gap-10 '>
    <h1 data-aos="flip-up" className="text-4xl font-bold text-center">Experience</h1>
 <p data-aos="zoom-in-right" className="text-[#999999] text-center">😃Embrace the <span className='text-white'>challenge</span>, for in facing difficult tasks and <span className='text-white'>mastering</span> new technologies, <span className='text-white text-lg font-bold underline '>you unlock the door</span> to <span className='text-white'>growth</span> and <span className='text-white'>endless possibilities</span>🔥.</p>
 <div>
   <ul data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='text-white grid grid-cols-1 gap-4'>
       {experience.map((val) => (
           <li key={val.id} className='border rounded-xl border-[#1199EE]  p-5'>
              <p className='text-3xl font-extrabold   text-center'>{val.attributes.company}</p> 
               
              
                    <div className='flex justify-center pt-4 text-lg font-medium text-[#999999]'>
                      {/* <span className='flex-1'>Join :{val.attributes.join}</span> */}
                      <span className='flex-1'>{val.attributes.quit}</span>
                    </div>
                    <div className='grid gap-5 text-center '>
                    <p className=' text-xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent'>As a {val.attributes.role}</p>
                    <p className='text-base font-medium  ]'>{val.attributes.Technologies}</p>
                    </div>
                    <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                <ul className=''>
                  {experiencelist.map((val)=>(
                    <li key={val.id} className='border rounded-xl border-[#1199EE] my-4 text-white p-5'>
                      <p className='text-lg font-semibold text-white'>{val.attributes.experiencelist}</p>
                    </li>
                  ))
                      
                  }
                </ul>
                      
                </div>  
           </li>
       ))}
   </ul>
 </div>
 {/* <p className='text-3xl font-bold text-center '>Embrace the challenge, for in facing difficult tasks and mastering new technologies, you unlock the door to growth and endless possibilities 🔥.</p> */}
</section>
  )
}

export default Experiencepage 
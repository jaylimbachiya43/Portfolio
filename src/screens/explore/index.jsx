"use client";
import React, { useEffect, useState , useRef } from "react";
import axios from "axios";
import ContactForm from "../contactForm";
import Link from "next/link";

// import Landingicon from "../../../public/landingicon.svg";
// import Html from "../../../public/html.svg"
// import Css from "../../../public/css.svg"
// import Js from "../../../public/js.svg"



const Explore = () => {
  

// real code
  const [technologies, settechnologies] = useState([]);

  useEffect(() => {
    // fetch data
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/technologies"
      );
      // console.log(response);
      settechnologies(response.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  console.log(technologies);
  return (
    <section  data-aos="zoom-in"  className="bg-black text-white py-14 px-12 md:px-16 lg:pt-28 lg:px-48 grid gap-10  ">
      <div className="flex flex-col justify-center text-center gap-10">
        <h1 className=' text-5xl font-bold break-words  flex flex-col '>
          {" "}
          <span>Building digital</span>
          <span> products, brands, and</span>{" "}
          <span span className="break-all ">
            experiences{" "}
          </span>
        </h1>
        <h4 className="text-[#999999] ">
          {" "}
          I am a <span className="text-white font-bold animate-ping">Website Designer</span> and{" "}
          <span className="text-white font-bold  animate-ping">Full Stack Developer</span>.
        </h4>
        <p className=" text-[#999999] ">
          I specialise in UI/UX Design, Responsive Web Design, and Visual
          Development.
        </p>
        <Link href='/contact'><button className="border   bg-white py-2 px-4  text-black mx-auto shadow-lg shadow-white">
          Connect with me
        </button></Link>
        <p className="text-2xl break-words">
          I am exploring different new technologies, libraries, and AI tools.
        </p>
      </div>
      <div   >
        <ul className="text-white grid grid-cols-1 lg:grid-cols-2 gap-4">
          {technologies?.map((val) => {
            
            return (
              <li 
                key={val.id}
                className="border rounded-xl border-[#1199EE] p-5"
              >
                {/* {val.icone} */}

                <div className="grid gap-2">
                  <h1 className="text-[#1199EE] font-bold font-sans">{val.attributes.title}</h1>
                  <p className="">{val.attributes.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
       
      </div>
      
    </section>
  );
};

export default Explore;

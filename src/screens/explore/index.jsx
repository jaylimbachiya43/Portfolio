"use client";
import React, { useEffect, useState , useRef } from "react";
import axios from "axios";
import ContactForm from "../contactForm";
import Link from "next/link";
const technologies=[
  {
    id:1,
    title:"HTML5",
    description:"HTML5 is the latest version of the Hypertext Markup Language used for structuring and presenting content on the web.",
  },
  {
    id:2,
    title:"CSS3",
    description:"CSS3 is the latest version of Cascading Style Sheets that allows you to style and design web pages with enhanced features and capabilities.",
  },
  {
    id:3,
    title:"Tailwind CSS",
    description:"Tailwind CSS is a utility-first CSS framework that provides a comprehensive set of pre-designed classes to rapidly build modern and responsive web interfaces.",
  },
  {
    id:4,
    title:"JavaScript ",
    description:"JavaScript is a powerful programming language used for creating interactive and dynamic web content, adding functionality to websites, and building web applications.",
  },
  {
    id:5,
    title:"React.js",
    description:"React.js is a popular JavaScript library used for building user interfaces, offering a component-based approach and efficient rendering for creating interactive web applications.",
  },
  {
    id:6,
    title:"Next.js",
    description:"Next.js is a powerful React framework that enables server-side rendering, static site generation, and seamless client-side navigation, providing a robust and efficient platform for building modern web applications.",
  },
  {
    id:7,
    title:"MongoDB ",
    description:"MongoDB is a popular NoSQL database management system that provides a flexible and scalable solution for storing, retrieving, and managing data in a document-oriented format.",
  },
  {
    id:8,
    title:"PostgreSQL",
    description:"PostgreSQL, also known as Postgres, is a robust open-source relational database management system that offers advanced features, scalability, and strong data integrity for storing and managing structured data.",
  },
  {
    id:9,
    title:"React Native",
    description:"React Native is a powerful JavaScript framework that allows developers to build native mobile applications for iOS and Android platforms using a single codebase.",
  },
  {
    id:10,
    title:"Redux",
    description:"Redux is a predictable state management library for JavaScript applications, enabling efficient management of application state in a centralized and predictable manner.",
  },


]


const Explore = () => {
// // real code
//   const [technologies, settechnologies] = useState([]);

//   useEffect(() => {
//     // fetch data
//     fetchdata();
//   }, []);
//   const fetchdata = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:1337/api/technologies"
//       );
//       // console.log(response);
//       settechnologies(response.data.data);
//     } catch (error) {
//       console.error("Error fetching product data:", error);
//     }
//   };

  return (
    <section  data-aos="zoom-in"  className="bg-black text-slate-100 py-14 px-12 md:px-16 lg:pt-28 lg:px-48 grid gap-10   ">
      <div className="flex flex-col justify-center text-center gap-10">
        <h1 className=' text-transparent bg-clip-text bg-gradient-to-br from-white via-pink-100 to-white text-5xl font-bold break-words  flex flex-col '>
          {" "}
          <span>Building digital</span>
          <span> products, brands, and</span>{" "}
          <span span className="break-all ">
            experiences{" "}
          </span>
        </h1>
        <h4 className="text-[#999999] ">
          {" "}
          I am a <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-pink-400 to-blue-500 font-bold">Website Designer</span> and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-pink-400 to-blue-500 font-bold  ">Full Stack Developer</span>.
        </h4>
        <p className=" text-[#999999] ">
          I specialise in UI/UX Design, Responsive Web Design, and Visual
          Development.
        </p>
        <Link href='/contact'><button className=" hover:scale-[110%] duration-300  bg-gradient-to-br from-amber-200 via-pink-400 to-blue-500 py-2 px-4  text-black mx-auto   ">
          Connect with me
        </button></Link>
        <p className="text-2xl break-words font-semibold">
          I am exploring different new technologies, libraries, and AI tools.
        </p>
      </div>
      <div   >
        <ul className="text-white grid grid-cols-1 lg:grid-cols-2 gap-4">
          {technologies?.map((val) => {
            
            return (
              <li 
                key={val.id}
                className=" rounded-xl  hover:scale-[102%] duration-300 bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 p-5"
              >
                {/* {val.icone} */}

                <div className="grid gap-2">
                  <h1 className="text-black text-xl font-black  ">{val.title}</h1>
                  <p className="text-black ">{val.description}</p>
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

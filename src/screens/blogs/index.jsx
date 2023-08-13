"use client";
import React, { useState, useEffect } from "react";
import MERN from "../../../public/Mern.webp"
// import { Formik, Form, Field } from "formik";
import Image from "next/image";
// import Landingicon from "../../../public/landingicon.svg";
// import axios from "axios";
import Link from "next/link";
// import Upload from "../../../public/upload.webp";
const blogdata = [
  {
    id:1,
    title: "Exploring the MERN Stack",
    des: "The MERN stack encompasses four core technologies: MongoDB, a versatile NoSQL database; Express.js, a backend framework for routing and handling requests; React, a frontend library for building dynamic interfaces; and Node.js, an environment for server-side JavaScript. Developers utilize these components to create modern web applications, leveraging React's component-based UI, Express.js and Node.js for backend logic, and MongoDB for flexible data storage. The stack's uniform use of JavaScript promotes efficient development, scalability, and easier collaboration between frontend and backend teams. As a result, MERN has become a popular choice for building robust, full-stack applications.",
    img: MERN,
    

  }
]
const Blogs = () => {

  // const [blogs, setBlogs] = useState([]);
  // const [getdata, setgetdata] = useState({});

  // useEffect(() => {
  //   fetchdata();
  // }, []);
  // const fetchdata = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:1337/api/blogs?populate=*");
  //     console.log(response.data.data);
  //     setBlogs(response.data.data);
  //   } catch (error) {
  //     console.log("Error fetching product data:", error);
  //   }
  // };

  // const editItem = async (id) => {
  //   // setShowEditForm(true);
  //   try {
  //     // const response = await axios.put( `http://localhost:1337/api/skilstechnologies/${id}`)
  //     const response = await axios.get(
  //       `http://localhost:1337/api/skilstechnologies/${id}`
  //     );
  //     // console.log(response.data.data.attributes);
  //     setgetdata(response.data.data.attributes);
  //     console.log(getdata);
  //   } catch (error) {
  //     console.log("no response", error);
  //   }
  // };

  // const handleSubmit = (values) => {
  //   // Make a PUT request to update the data
  //   axios
  //     .put(`http://localhost:1337/api/skilstechnologies/${id}`, values)
  //     .then((response) => {
  //       // Handle the response after updating the data
  //       console.log("Data updated successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating data:", error);
  //     });
  // };

  // const [selectedFile, setSelectedFile] = useState(null);
  // const [previewURL, setPreviewURL] = useState('');

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);

  //   // Create a preview URL for the selected file
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setPreviewURL(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleRemove = () => {
  //   setSelectedFile(null);
  //   setPreviewURL('');
  // };

  return (
    // <section
    // data-aos="zoom-in"
    //   className="bg-black sm:h-screen md:h-screen lg:h-screen text-white  px-12 lg:py-28 pt-10 lg:px-48 grid gap-10 "
    // >
    //   <h1 className="text-4xl font-bold">Blogs </h1>
    //   <p className="text-[#999999]">know Technology better !</p>

    //   {/* <div className="flex items-center">
    //   <div className="mr-4">
    //     {previewURL ? (
    //       <div className="relative">
    //         <img src={previewURL} alt="Preview" className="max-w-xs rounded-md" />
    //         <button
    //           className="absolute top-2 right-2 text-red-500 hover:text-red-700"
    //           onClick={handleRemove}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.707 4.293a1 1 0 011.414 0L10 8.586l2.879-2.879a1 1 0 111.414 1.414L11.414 10l2.879 2.879a1 1 0 01-1.414 1.414L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     ) : (
    //       <div  className="w-28 h-28 bg-gray-200 flex items-center justify-center rounded-md">
    //         <span className="text-black text-center">Unuploaded Photo</span>
    //       </div>
    //     )}
    //   </div>

    //   <div>
    //     <label htmlFor="upload-input" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
    //       Upload
    //     </label>
    //     <input
    //       id="upload-input"
    //       type="file"
    //       accept="image/*"
    //       className="hidden"
    //       onChange={handleFileChange}
    //     />
    //   </div>
    // </div> */}

    //   <div>
    //     <ul className="">
    //       {blogdata.map((val) => {
    //         return (
    //           <li
    //             key={val.id}
    //             className="border rounded-xl border-[#1199EE] mt-5 p-5"
    //           >
    //             <div>
    //               <div>
    //                 <Image
    //                   src={val.img}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className="">
    //                 <Link href={"/item/[id]"} as={`/item/${val.id}`}>
    //                   <h1 className="text-base font-bold text-[#1199EE]">
    //                     {val.title}{" "}
    //                   </h1>
    //                 </Link>
    //                 <p className="pt-4">{val.des}</p>
    //               </div>
    //             </div>
               
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    //   {/* <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    //     {() => (
    //       <Form>
    //         <label htmlFor="name">Name:</label>
    //         <Field
    //           type="text"
    //           id="title"
    //           name="title"
    //           className="mt-1 p-3 text-white bg-[#605e5e54] rounded-md w-full"
    //         />

           

    //         <label htmlFor="about">About:</label>
    //         <Field
    //           as="textarea"
    //           id="about"
    //           name="about"
    //           className="mt-1 p-3 text-white bg-[#605e5e54] rounded-md w-full"
    //         />

    //         <button
    //           type="submit"
    //           className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-[#e7e7e754] hover:text-white transition-colors duration-300"
    //         >
    //           Update
    //         </button>
    //       </Form>
    //     )}
    //   </Formik> */}
    // </section>
    <section className="bg-black ">
      <div className="  py-14 px-12 md:px-16 lg:pt-28 lg:px-48 grid gap-10 ">
        <div className="grid gap-3">
          <h1 className="text-4xl font-bold text-center  text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-pink-400 to-blue-500">Blogs</h1>
         
          <p className="text-[#999999] text-base font-semibold text-center">know Technology better !</p> 
          </div> 

          <div className="grid self-center">
            {blogdata.map((val)=>{
              return(
              <div  className="rounded-3xl  hover:scale-[102%] duration-300 bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 p-5" key={val.id} >
                <div className=" ">
                <Image src={val.img} alt="image" className="rounded-3xl"/> 
                </div>
             
                  <h1 className="text-lg text-black font-extrabold text-center pt-3">{val.title}</h1>
                  <p className="text-black text-center">{val.des}</p>
                  
               
              </div>)
            })}
            </div>   
      </div>
    </section>
  );
};

export default Blogs;

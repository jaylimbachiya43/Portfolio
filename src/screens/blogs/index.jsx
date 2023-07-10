'use client'
import React, { useState, useEffect } from 'react'



import Landingicon from "../../../public/landingicon.svg";
// import Upload from "../../../public/upload.webp";
const data = [
  {
    id: 1,
    language: "JavaScript",
    category: "Scripting",
    about: "JavaScript is a versatile programming language commonly used for web development. It provides interactivity, dynamic content, and enhances user experience on websites."
  },
  {
    id: 2,
    language: "Python",
    category: "General-purpose",
    about: "Python is a high-level programming language known for its simplicity and readability. It is used for various purposes such as web development, data analysis, artificial intelligence, and more."
  },
  {
    id: 3,
    language: "Java",
    category: "Object-oriented",
    about: "Java is a popular programming language widely used for building enterprise-level applications, Android mobile apps, and server-side development. It offers strong type checking and a rich set of libraries."
  },
  {
    id: 4,
    language: "C++",
    category: "Compiled",
    about: "C++ is a powerful programming language used for system programming, game development, and high-performance applications. It provides low-level control and supports object-oriented programming."
  },
  {
    id: 5,
    language: "Ruby",
    category: "Interpreted",
    about: "Ruby is a dynamic, object-oriented scripting language known for its simplicity and productivity. It is often used for web development, server-side scripting, and automation tasks."
  }
];


const Blogs = () => {

   

      
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
  
// const deleteItem = (id) =>{
// console.log("remove");
//   const updatedItems = id - 1
//   delete data[updatedItems];

// }

   
  return (
    <section data-aos="fade-up"
    data-aos-duration="3000" className='bg-black h-screen text-white py-14 px-12 lg:py-28 lg:px-48 grid gap-10 '>
    <h1  className="text-4xl font-bold">Connect with me </h1>
 <p className="text-[#999999]">Tell me about your next project</p>

 {/* <div className="flex items-center">
      <div className="mr-4">
        {previewURL ? (
          <div className="relative">
            <img src={previewURL} alt="Preview" className="max-w-xs rounded-md" />
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={handleRemove}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.707 4.293a1 1 0 011.414 0L10 8.586l2.879-2.879a1 1 0 111.414 1.414L11.414 10l2.879 2.879a1 1 0 01-1.414 1.414L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div  className="w-28 h-28 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-black text-center">Unuploaded Photo</span>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="upload-input" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Upload
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div> */}
 
 
<div>
<ul className=''>
          {
            data.map((val) => {
              return(
              <li key={val.id} className='border rounded-xl border-[#1199EE] mt-5 p-5'>

                  <h1 className='text-base font-bold text-[#1199EE]'>{val.language} </h1>
                  <p>{val.about}</p>
                 <button className='mt-4 p-3 bg-red-600 rounded-2xl' >Delete</button>
              </li>
            )
          })}
        </ul>
</div>

</section>
  )
}

export default Blogs

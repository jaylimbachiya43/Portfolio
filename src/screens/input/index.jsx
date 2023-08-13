// "use client";
// import React, { useEffect, useState } from "react";
// import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Toastify from "toastify-js";
// const Input = () => {
//   const [technology, setTechnology] = useState([]);
//   // const formik = useFormik({
//   //   validateOnChange: false,
//   // });
//   // const [getdata, setGetData] = useState([]);
//   // const [initialValues, setInitialValues] = useState({
//   //   name: "",
//   //   category: "",
//   //   about: "",
//   // });
//   const [value, setValue] = useState({});
//   const[name, setname] = useState("");
//   const[category, setCategory]= useState("")
//   const[about, setabout]= useState("")
//   // const [showEditForm, setShowEditForm] = useState(false);
//   const { push } = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("auth_token");
//     if (!token) {
//       push("/login");
//     }
//     fatchdata();
//     editItem();
//   }, []);
//   // useEffect(() => {}, [showEditForm]);
//   const fatchdata = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:1337/api/skilstechnologies"
//       );
//       // console.log(response);
//       setTechnology(response.data.data);
//     } catch (error) {
//       console.log("Error fetching product data:", error);
//     }
//   };
//   const initialValues = {
//     name: "",
//     category: "",
//     about: "",
//   };
//   // let editvalues = {
//   //   name: value.name || "",
//   //   category:value.category || "",
//   //   about: value.about || "",
//   // };

//   const handaleSubmit = async (values, { setSubmitting, resetForm }) => {
//     console.log({ values });
//     try {
//       const response = await axios.post(
//         "http://localhost:1337/api/skilstechnologies",
//         { data: {values}  }
//       );
//       // window.location.reload(true);

//       if (response.status === 200) {
//         Toastify("youre data sussesfully updated");
//       } else {
//         console.log("Failed to send data.");
//       }
//     } catch (error) {
//       console.log("Error", error);
//     } finally {
//       setSubmitting(false);
//       resetForm();
//     }
//   };

//   const deleteItem = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:1337/api/skilstechnologies/${id}`
//       );
//       window.location.reload(true);
//     } catch (error) {
//       console.log("no response", error);
//     }
//   };

//   const editItem = async (id) => {
//     // setShowEditForm(true);

//     try {
//       // const response = await axios.put( `http://localhost:1337/api/skilstechnologies/${id}`)
//       const response = await axios.get(
//         `http://localhost:1337/api/skilstechnologies/${id}`
//       );
//       console.log(response?.data?.data?.attributes);
//       console.log("edite");
//       const res = response?.data?.data?.attributes;
//       setname(res.name);
//       setCategory(res.category);
//       setabout(res.about);
//       // setInitialValues({
//       //   name: setvelues.name,
//       //   category: setvelues.category,
//       //   about: setvelues.about,
//       // })
//     } catch (error) {
//       console.log("no response", error);
//     }
//   };

//   const validateForm = (value) => {
//     const error = {};
//     console.log("Values", error);
//     //add error slogic if needed
//     return error;
//   };

//   // const handaleChange = async ( value , id, { setSubmitting, resetForm }) => {
//   //   console.log({ value });
//     // try {
//     //   const response = await axios.put(
//     //     `http://localhost:1337/api/skilstechnologies/${id}`,
//     //   {data:{
//     //     name: value.name,
//     //     category: value.category,
//     //     aboute: val.about
//     //   }}
//     //   );

//     //   if (response.status === 200) {
//     //     Toastify("youre data sussesfully updated");
//     //   } else {
//     //     console.log("Failed to send data.");
//     //   }
//     // } catch (error) {
//     //   console.log("Error", error);
//     // } finally {
//     //   setSubmitting(false);
//     //   resetForm();
//     // }
//   // };
//   // const handaleChange = async() => {
//   //   let item ={name, category, about}
//   //   console.log(item);
//   // }

//   return (
//     <section>
//       <div className="bg-black   text-white py-14 grid justify-center lg:pt-28  gap-10 ">
//         <h1 className=" text-white text-4xl font-bold text-center">
//           Input youre skils Felid{" "}
//         </h1>

//         <div className="px-3 md:px-32 lg:px-60">
//           <ul>
//             {technology?.map((val) => {
//               return (
//                 <li key={val.id} className="flex gap-5 items-center">
//                   <div className="border rounded-xl border-[#1199EE] mt-5 p-5">
//                     <h1 className="text-base font-bold text-[#1199EE]">
//                       {val.attributes.name}{" "}
//                     </h1>
//                     <p>{val.attributes.about}</p>
//                     <div className="flex gap-5 items-center">
//                       <button
//                         className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                         onClick={() => deleteItem(val.id)}
//                       >
//                         Delete
//                       </button>
//                       <button
//                         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         onClick={() => editItem(val.id)}
                        
//                       >
//                         Edit
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <Formik
//           initialValues={initialValues}
//           validate={validateForm}
//           onSubmit={handaleSubmit}
//           className="lg:px-28"
//         >
//           <Form className="lg:px-28">
//             <div className="flex justify-between mb-5 gap-2 ">
//               <label htmlFor="name" className="hidden font-semibold">
//                 Technology Name:
//               </label>
//               <Field
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 bg-[#605e5e54] p-3 rounded-md w-full"
//                 placeholder="Technology Name"
              
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="category" className=" hidden font-semibold">
//                 Category:
//               </label>
//               <Field
//                 type="text"
//                 id="category"
//                 name="category"
//                 className="  p-4 bg-[#605e5e54] rounded-md w-full"
//                 placeholder="Category"
               
//               />
//               <ErrorMessage
//                 name="category"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="about" className="hidden">
//                 About:
//               </label>
//               <Field
//                 as="textarea"
//                 id="about"
//                 name="about"
//                 className="mt-1 p-3 bg-[#605e5e54] rounded-md w-full"
//                 placeholder="About"
               
//               />
//               <ErrorMessage
//                 name="about"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-[#e7e7e754] hover:text-white transition-colors duration-300"
//             >
//               Submit
//             </button>
//           </Form>
//         </Formik> 

//         {/* <Formik
         
//           validate={validateForm}
//           onSubmit={handaleChange}
//           className="lg:px-28"
//         > 
//           <Form className="lg:px-28">
//             <div className="flex justify-between mb-5 gap-2 ">
//               <h1>2</h1>
//               <label htmlFor="name" className="hidden font-semibold">
//                 Technology Name:
//               </label>
//               <Field
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 bg-[#605e5e54] p-3 rounded-md w-full"
//                 placeholder="Technology Name"
//                 value={name}
//                 onChange={(e)=>setname(e.target.value)}
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="category" className=" hidden font-semibold">
//                 Category:
//               </label>
//               <Field
//                 type="text"
//                 id="category"
//                 name="category"
//                 className="  p-4 bg-[#605e5e54] rounded-md w-full"
//                 placeholder="Category"
//                 value={category}
//                 onChange={(e)=>setCategory(e.target.value)}
//               />
//               <ErrorMessage
//                 name="category"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="about" className="hidden">
//                 About:
//               </label>
//               <Field
//                 as="textarea"
//                 id="about"
//                 name="about"
//                 className="mt-1 p-3 bg-[#605e5e54] rounded-md w-full"
//                 placeholder="About"
//                 value={about}
//                 onChange={(e)=>setabout(e.target.value)}
          
//               />
//               <ErrorMessage
//                 name="about"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-[#e7e7e754] hover:text-white transition-colors duration-300"
//             >
//               Submit
//             </button>
//           </Form>
         
//         </Formik> */}

//       </div>
//     </section>
//   );
// };

// export default Input;
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
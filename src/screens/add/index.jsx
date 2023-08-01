"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Addpage = () => {
    const [technology, setTechnology] = useState([]);
    const [initialValues, setInitialValues] = useState({
        name: "",
        category: "",
        about: "",
      });
    const { push } = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        push("/login");
      }
      fatchdata();
      
    }, []);

    // deleteitems 
    const deleteItem = async (id) => {
        try {
          const response = await axios.delete(
            `http://localhost:1337/api/skilstechnologies/${id}`
          );
          alert("sussesfully delete item");
          window.location.reload(false)
        } catch (error) {
          console.log("no response", error);
        }
      };
    // useEffect(() => {}, [showEditForm]);
    const fatchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/skilstechnologies"
        );
        // console.log(response);
        setTechnology(response.data.data);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    const handaleSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log({ values });
        try {
          const response = await axios.post(
            "http://localhost:1337/api/skilstechnologies",
            { data: values }
          )
         fatchdata()
          ;
          if (response.status === 200) {
            console.log("Data sent successfully!");
          } else {
            console.log("Failed to send data.");
          }
        } catch (error) {
          console.log("Error", error);
        } finally {
          setSubmitting(false);
          resetForm();
        }
      };
      const validateForm = (values) => {
        const error = {};
        console.log("Values", error);
        //add error slogic if needed
        return error;
      };
    
  return (
    <section>
        <div className="bg-black   text-white py-14 grid justify-center lg:pt-28  gap-10 ">

        <h1 className=" text-white text-4xl font-bold text-center">
          Input youre skils Felid{" "}
        </h1>

        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handaleSubmit}
          className="lg:px-28"
        >
          <Form className="lg:px-28">
            <div className="flex justify-between mb-5 gap-2 ">
              <label htmlFor="name" className="hidden font-semibold">
                Technology Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 bg-[#605e5e54] p-3 rounded-md w-full"
                placeholder="Technology Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="category" className=" hidden font-semibold">
                Category:
              </label>
              <Field
                type="text"
                id="category"
                name="category"
                className="  p-4 bg-[#605e5e54] rounded-md w-full"
                placeholder="Category"
              />
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="about" className="hidden">
                About:
              </label>
              <Field
                as="textarea"
                id="about"
                name="about"
                className="mt-1 p-3 bg-[#605e5e54] rounded-md w-full"
                placeholder="About"
                
              />
              <ErrorMessage
                name="about"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-[#e7e7e754] hover:text-white transition-colors duration-300"
            >
              Submit
            </button>
          </Form>
        </Formik>


        <div className="px-3 md:px-32 lg:px-60">
          <ul>
            {technology?.map((val) => {
              return (
                <li key={val.id} className="flex gap-5 items-center">
                  <div className="border rounded-xl border-[#1199EE] mt-5 p-5">
                    <h1 className="text-base font-bold text-[#1199EE]">
                      {val.attributes.name}{" "}
                    </h1>
                    <p>{val.attributes.about}</p>
                    <div className="flex gap-5 items-center">
                      <button
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteItem(val.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
    </section>
  )
}

export default Addpage
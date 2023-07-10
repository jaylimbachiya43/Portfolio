"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Input = () => {

const initialValues = {
    name: "",
    category:"",
    about:"",
}

const handaleSubmit = async (values,{setSubmitting, resetForm}) => {
    console.log({values});
    try {
        const response = await axios.post("http://localhost:1337/api/skilstechnologies",{data:values});
        if (response.status === 200) {
            console.log("Data sent successfully!");
        }else{
            console.log("Failed to send data.");
        }
        
    } catch (error) {
      console.log("Error", error);
    }finally{
        setSubmitting(false);
        resetForm();
    }
}
const validateForm = (values) =>{
    const error = {};
    console.log("Values",error);
    //add error slogic if needed
    return error
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

        >
          <Form>

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
                <label htmlFor="about" className="hidden" >About:</label>
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
              <button type="submit"  className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-[#e7e7e754] hover:text-white transition-colors duration-300">Submit</button>
            
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Input;

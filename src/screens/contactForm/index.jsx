"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, resetForm } from "formik";
import axios from "axios";


const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting , resetForm }) => {
    console.log({ values });
    try {
      const response = await axios.post(
        "http://localhost:1337/api/contacts",
        { data: values }
      );

      if (response.status === 200) {
        console.log("Data sent successfully!");
        // Handle success response
      } else {
        console.error("Failed to send data.");
        // Handle error response
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    } finally {
      setSubmitting(false);
      resetForm();
    }
 
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validateForm = (values) => {
    const errors = {};
    console.log("VALUES", values);

    // Add validation logic for fields if needed

    return errors;
  };

  return (
    <section data-aos="fade-up" className=' '>
        <div className="bg-black   text-white py-14 grid justify-center lg:pt-28  gap-10 ">
    <h1 className="text-4xl font-bold text-center">Connect with me </h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="mx-4  ">
            <div className="flex justify-between mb-5 gap-2 ">
          <div className=" ">
            <label htmlFor="name" className="block  font-semibold">Name:</label>
            <Field type="text" id="name" name="name" className="mt-1 py-2 bg-[#605e5e54]  rounded-md w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm"/>
          </div>
          <div className="">
            <label htmlFor="email" className="block font-semibold">Email:</label>
            <Field type="email" id="email" name="email" className="mt-1 py-2  bg-[#605e5e54] rounded-md w-full"/>
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>
          </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <Field as="textarea" id="message" name="message" className="mt-1 p-2 bg-[#605e5e54] rounded-md w-full" />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm"/>
          </div>
          <button type="submit"  className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </Form>
      </Formik>
     </div>
 </section>
  );
};

export default ContactForm;

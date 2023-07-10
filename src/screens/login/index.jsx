'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Formik , Form, Field} from 'formik';

const LoginPage = () => {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwia…3NjB9.Vl-KjPlTb0gfJsN1Krj6B4Ph-3ZfNTZy1BaMbRiNtUA";
        if (token) {
          window.location.href = "/input";
        }
      });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:1337/api/auth/local', {
          identifier: username,
          password: password,
        });
  
        // Handle the response, e.g., store user data in the state or local storage
        console.log(response.data);
      } catch (error) {
        // Handle login error
        console.error(error);
      }
    };
  
    return (
      <div className='bg-black   text-white py-14 grid justify-center lg:pt-28  gap-10'>
        <h1 className='text-white text-2xl font-extrabold '>Login Page</h1>
        <Formik>
        <Form onSubmit={handleSubmit}>
            
          <Field type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 bg-[#605e5e54] p-2 rounded-md w-full"/>
          <Field type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 bg-[#605e5e54] p-2 rounded-md w-full" />
          <button type="submit"  className="bg-white text-black my-4 w-full py-3 rounded-md hover:bg-[#e7e7e754] hover:text-white transition-colors duration-300">Login</button>
        </Form>
        </Formik>
      </div>
    );
 
}

export default LoginPage
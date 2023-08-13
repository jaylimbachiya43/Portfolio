'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Item = (context) => {
    // const [blogs, setBlogs] = useState([]);
    // const [getdata, setgetdata] = useState({});
  
    // useEffect(() => {
    //   fetchdata();
    // }, []);
    // const fetchdata = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:1337/api/blogs/${context.params.id}`);
    //     console.log(response.data.data);
    //     setBlogs(response.data.data);
    //   } catch (error) {
    //     console.log("Error fetching product data:", error);
    //   }
    // };
  return (
    <div className='py-14'>
    <div className=' mx-4 border rounded-xl border-[#1199EE]  ' >
        <h1 className='text-white text-center text-5xl font-extrabold shadow-sm shadow-white'>{blogs.attributes?.title}</h1>
        <p className='text-white text-center text-3xl font-medium pt-20'>{blogs.attributes?.about}</p>
    </div>
    </div>
  )
}

export default Item
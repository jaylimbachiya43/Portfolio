"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SkilsPage = () => {
  const [filterdata, setfilterdata] = useState({});
  useEffect(() => {
    fatchdata();
  }, []);

  const fatchdata = () => {
    axios
      .get("http://localhost:1337/api/skilstechnologies")
      .then((response) => {
        console.log(response);
        // console.log("filtered", filterItem(response.data.data));
        const filterItem = response?.data?.data?.reduce(
          (result, technology) => {
            const category = technology.attributes.category;
            if (!result[category]) {
              result[category] = [];
            }
            result[category].push(technology);
            return result;
          },
          {}
        );
        setfilterdata(filterItem);
        console.log(filterItem);
      });
  };
  // const filterItem = (data) => {
  //   const filteredData = data.filter((p, c) => {
  //     console.log(c);
  //     const key = c.attributes.category;
  //     if (p[key] === undefined) {
  //       p[key] = [];
  //     }
  //     p[key].push(c);
  //     return p;
  //   }, {});
  //   return filteredData;
  // };
  return (
    <div className="bg-black text-white py-14 md:px-20 px-4 lg:py-28 lg:px-16 grid gap-10">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-pink-400 to-blue-500 text-center font-extrabold text-3xl">
        Skils🔥
      </h1>
      <p className="text-[#999999] text-center">
        Ready and eager to embark on the path of{" "}
        <span className="text-white text-base font-bold">
          innovation, I welcome
        </span>{" "}
        difficult tasks and new technologies as stepping stones towards{" "}
        <span className="text-white text-base font-bold"> success</span>.
      </p>
      <div className="grid  gap-10">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="grid lg:grid-cols-2"
        >
          <div className="grid grid-col-1 gap-2">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-white via-neutral-500 to-white  pb-7 text-center font-extrabold text-4xl">
              Front-End
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul>
                  {filterdata?.frontend?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="rounded-xl  hover:scale-[102%] duration-300 bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 mt-5 p-5"
                      >
                        <h1 className="text-black text-xl font-black ">
                          {val.attributes.name}{" "}
                        </h1>
                        <p className="text-black">{val.attributes.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid self-center text-8xl ">
             {/* <h1 className="text-center hover:scale-[102%] duration-300  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 ">⬇</h1> */}
             </div>
        </div>

        <div className="grid lg:grid-cols-2">
        <div className="grid self-center text-8xl ">
           {/* <h1 className="text-center hover:scale-[102%] duration-300  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 ">⬇</h1> */}
           </div>


          <div className="grid grid-col-1 gap-2">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-white via-neutral-500 to-white  pb-7 text-center font-extrabold text-4xl">
              back-End
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul className="">
                  {filterdata?.backend?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="rounded-xl  hover:scale-[102%] duration-300 bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 mt-5 p-5"
                      >
                        <h1 className="text-black text-xl font-black ">
                          {val.attributes.name}{" "}
                        </h1>
                        <p className="text-black">{val.attributes.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="grid grid-col-1 gap-2">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-white via-neutral-500 to-white  pb-7 text-center font-extrabold text-4xl">
              DataBase
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul>
                  {filterdata?.database?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="rounded-xl  hover:scale-[102%] duration-300 bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 mt-5 p-5"
                      >
                        <h1 className="text-black text-xl font-black ">
                          {val.attributes.name}{" "}
                        </h1>
                        <p className="text-black">{val.attributes.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid self-center text-8xl ">
             {/* <h1 className="text-center hover:scale-[102%] duration-300  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 ">⬇</h1> */}
          </div>

        </div>
        <div className="grid lg:grid-cols-2">
        <div className="grid self-center text-8xl "> 
        {/* <h1 className="text-center hover:scale-[102%] duration-300  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 ">⬆</h1> */}
        </div>


          <div className="grid grid-col-1 gap-2">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-white via-neutral-500 to-white  pb-7 text-center font-extrabold text-4xl">
              Version Control
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul className="">
                  {filterdata?.versioncontrol?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="rounded-xl  hover:scale-[102%] duration-300 bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400 mt-5 p-5"
                      >
                        <h1 className="text-black text-xl font-black ">
                          {val.attributes.name}{" "}
                        </h1>
                        <p className="text-black">{val.attributes.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilsPage;

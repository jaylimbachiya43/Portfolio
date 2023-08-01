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
      <h1 className="text-white text-center font-extrabold text-3xl">
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
            <h1 className="text-white pb-7 text-center font-extrabold text-3xl">
              Front-End
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul>
                  {filterdata?.frontend?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="border rounded-xl border-[#1199EE] mt-5 p-5"
                      >
                        <h1 className="text-base font-bold text-[#1199EE]">
                          {val.attributes.name}{" "}
                        </h1>
                        <p>{val.attributes.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="grid lg:grid-cols-2">
          <div></div>

          <div className="grid grid-col-1 gap-2">
            <h1 className="text-white pb-7 text-center font-extrabold text-3xl">
              back-End
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul className="">
                  {filterdata?.backend?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="border rounded-xl border-[#1199EE] mt-5 p-5"
                      >
                        <h1 className="text-base font-bold text-[#1199EE]">
                          {val.attributes.name}{" "}
                        </h1>
                        <p>{val.attributes.about}</p>
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
            <h1 className="text-white pb-7 text-center font-extrabold text-3xl">
              DataBase
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul>
                  {filterdata?.database?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="border rounded-xl border-[#1199EE] mt-5 p-5"
                      >
                        <h1 className="text-base font-bold text-[#1199EE]">
                          {val.attributes.name}{" "}
                        </h1>
                        <p>{val.attributes.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div></div>

          <div className="grid grid-col-1 gap-2">
            <h1 className="text-white pb-7 text-center font-extrabold text-3xl">
              Version Control
            </h1>
            <div className="flex item-center gap-5 ">
              <div className=" ">
                <ul className="">
                  {filterdata?.versioncontrol?.map((val) => {
                    return (
                      <li
                        key={val.id}
                        className="border rounded-xl border-[#1199EE] mt-5 p-5"
                      >
                        <h1 className="text-base font-bold text-[#1199EE]">
                          {val.attributes.name}{" "}
                        </h1>
                        <p>{val.attributes.about}</p>
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

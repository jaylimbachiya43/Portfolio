"use client";
import Link from "next/link";
import { useCallback, useState } from "react";
import Linkdin from '../../../public/linkedin.svg'
import Github from '../../../public/github-icon.svg'
import Cv from '../../../public/document.svg'
import Explore from '../../../public/Exploricon.svg'
import Experience from '../../../public/experience.svg'
import Skils from '../../../public/skils.svg'
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { push } = useRouter();
    const logout = useCallback(() => {
      localStorage.clear();
      // setUser(null);
      alert("User logged out");
      push("/home");
      
    },[]);


  return (

      <nav className=" bg-black h-full shadow lg:flex-col lg:justify-start lg: justify-between  py-5 px-4 mx-auto lg:max-w-7xl  lg:flex ">
      
          <div>
            <div className="flex items-center justify-between py-3 px-5 lg:py-5 lg:block">
              <Link href="/home">
                <h2 className="text-2xl lg:  text-white font-bold font-mono">JAY</h2>
              </Link>
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-[#555555] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#555555]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#555555]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <div
              className={`flex-1 flex flex-col   gap-8 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "flex" : "hidden"
              }`}
            >
              <ul className="    flex flex-col px-3 py-8 text-sm left-0  gap-5  ">
              
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/explorepage" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><Explore/></button>

                    <span className="  group-hover:text-blue-500 ">Explore</span></Link>
                </li>
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/experience" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><Experience/></button>

                    <span className="group-hover:text-blue-500">Experience</span></Link>
                </li>
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/skils" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-white " ><Skils/></button>

                    <span className="group-hover:text-blue-500">Skils</span></Link>
                </li>
               
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/services" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><svg xmlns="http://www.w3.org/2000/svg" height="15" fill="#555555"   viewBox="0 -960 960 960" width="15"><path d="m263-263 290-143 143-290-290 143-143 290Zm217-177q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg></button>

                    <span className="group-hover:text-blue-500">Services</span></Link>
                </li>
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/contact" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><svg xmlns="http://www.w3.org/2000/svg" height="15" fill="#555555"   viewBox="0 -960 960 960" width="15"><path d="m263-263 290-143 143-290-290 143-143 290Zm217-177q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg></button>

                    <span className="group-hover:text-blue-500">Contact</span></Link>
                </li>
              
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/blog" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><svg xmlns="http://www.w3.org/2000/svg" height="15" fill="#555555"   viewBox="0 -960 960 960" width="15"><path d="m263-263 290-143 143-290-290 143-143 290Zm217-177q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg></button>

                    <span className="group-hover:text-blue-500">  Blog</span></Link>
                </li>
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/login" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><Cv/></button>

                    <span className="group-hover:text-blue-500">Login</span></Link>
                </li>
                    <button className="text-white" onClick={logout}>Logout</button>

                
              </ul>
              <div className="lg:py-8 flex flex-col  ">
                <h1 className="text-[#999999] ">Socials</h1>
              <ul className=" text-sm  flex flex-col gap-5 pt-6 pt-4-3 left-0 ">
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href='https://www.linkedin.com/in/jay394b47227/' target="_blank" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE]" >
                    <Linkdin/>
                  </button>

                    <span className="group-hover:text-blue-500">Linkdin</span></Link>
                </li>
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href='https://github.com/jaylimbachiya43'  target="_blank" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><Github/></button>

                    <span className="group-hover:text-blue-500">GitHub</span></Link>
                </li>
                <li className="text-[#555555] flex   items-center  group  ">
                  <Link href="/" className="flex items-center gap-3">
                  <button className="border p-1 border-[#555555] rounded-lg group-hover:bg-[#1199EE] " ><Cv/></button>

                    <span className="group-hover:text-blue-500">CV</span></Link>
                </li>
                

                
              </ul>
              </div > 
              
            </div>
          </div>
      </nav>

  );
}

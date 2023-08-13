import React from "react";

const experience = [
  {
    id: 1,
    company: "The Special Character",
    role: "Full Stack Developer",
    technologies:
      "HTML5, CSS3, JavaScript, Tailwind CSS, React JS, React Native, Next.js, MongoDB, PostgreSQL",
    projects: [
      {
        id: 1,
        name: "Personal Website",
        about:
          "Developed a Personal Portfolio Website using React.js, Next.js, Node.js, Strapi, HTML5, CSS3, Tailwind CSS, Responsive design.",
      },
      {
        id: 2,
        name: "Open Stack Hub",
        about:
          "Developed a company website utilizing React.js, Next.js, Tailwind CSS, and JSX. The site seamlessly integrates data from APIs and offers a rich array of functionalities.",
      },
      {
        id: 3,
        name: "Auco",
        about:
          "Developed  the frontend for Auoco, a digital business card platform, encompassing both website and mobile app. Employed HTML5, CSS3, Tailwind CSS, Next.js, and React Native to ensure responsiveness and seamless user experience.",
      },
      {
        id: 4,
        name: "Ecommerce",
        about:
          "As a frontend developer, I created an E-commerce website, managing Strapi data. The project utilized React.js, Next.js, Tailwind CSS, and JSX for the frontend, while Node.js and REST APIs handled the backend intricacies.",
      },
      {
        id: 2,
        name: "Open Stack Hub",
        about:
          "I developed a company website utilizing React.js, Next.js, Tailwind CSS, and JSX. The site seamlessly integrates data from APIs and offers a rich array of functionalities.",
      },
    ],
  },
  // Add more experience entries if needed
];

const Experiencepage = () => {
  return (
    <section className="bg-black text-white py-14 px-12 lg:py-28 lg:px-48 grid gap-10">
      <h1
        data-aos="flip-up"
        className="text-4xl font-bold text-center text-transparent text-white"
      >
        Experience
      </h1>
      <p
        data-aos="zoom-in-right"
        className="text-transparent bg-clip-text text-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
      >
        Embrace the challenge, for in facing difficult tasks and mastering new
        technologies,{" "}
        <span className="text-transparent bg-clip-text text-lg font-bold">
          you unlock the door
        </span>{" "}
        to growth and endless possibilities{" "}
        <span className="text-white">🔥</span>.
      </p>
      <div>
        <ul
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-white grid grid-cols-1 gap-4"
        >
          {experience.map((val) => (
            <li key={val.id} className="rounded-xl p-5 border-transparent ">
              <p className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-pink-400 to-stone-400  text-center ">
                {val.company}
              </p>
              <div className="flex justify-center pt-4 text-lg font-medium text-[#999999]">
                {/* <span className='flex-1'>Join :{val.attributes.join}</span> */}
                {/* <span className="flex-1">{val.attributes.quit}</span> */}
              </div>
              <div className="grid gap-5 text-center">
                <p className="text-xl font-bold text-">
                  
                  {val.role}
                </p>
                <p className="text-base font-medium ">{val.technologies}</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {val.projects.map((project) => (
                    <li
                      key={project.id}
                      className="rounded-xl hover:scale-[102%] duration-300 bg-gradient-to-br from-amber-200 via-pink-400 to-blue-500 my-4 text-black p-5"
                    >
                      <h1 className="text-2xl font-bold pb-3">
                        {project.name}
                      </h1>
                      <p className="text-lg opacity- font-semibold">
                        {project.about}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiencepage;

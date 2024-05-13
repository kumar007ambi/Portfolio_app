import React from "react";

const workExperiences = {
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("../components/assets/company/TCS.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("../components/assets/company/WEBGEN.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
       descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ],
};

const WorkExperience = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {workExperiences.experience.map((item, i) => {
          return (
            <div key={i} className="w-96">
              {/* <h1>{item.role}</h1>
              <img src={item.companylogo} alt="Company Logo" />
              <h1>{item.company}</h1>
              <h1>{item.date}</h1>
              <h1>{item.desc}</h1> */}
              <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={item.companylogo}
                    alt="company-logo"
                    className="w-full"
                  />
                </div>
                <div class="p-6">
                  <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {item.role}
                  </h5>
                  <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {item.date}
                  </p>
                  <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {item.desc}
                  </p>
                   <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {item.descBullets}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkExperience;

import React from "react";

const workExperiences = {
  experience: [
    {
      role: "FrontEnd Developer",
      company: "Tata Consultancy Services",
      companylogo: require("../components/assets/company/TCS.png"),
      date: "June 2018 – Present",
      desc: " Currently member of Frontend team which deals with a Government Project (Passport Seva) which is maintained by Ministry of External of Affairs.",
      descBullets: [
        "Implemented new features and enhancements for the client’s web application, ensuring functionality aligned with business requirements which leads to increase app’s performance by 30%.",
        " Optimized existing codebase, resulting in a 20% improvement in application performance.",
      ],
    },
    {
      role: "FrontEnd Developer",
      company: "Webgen Technologies ",
      companylogo: require("../components/assets/company/WEBGEN.png"),
      date: "May 2021 – Aug 2021",
      desc: "Designed and developed a full‑stack application from scratch, enabling user registration, login, and personalized dashboards. (Keywords: Full‑Stack, application development, user management).",
      descBullets: [
        "Successfully integrated the Stripe API to streamline the payment process within the application. (Keywords: API integration, Stripe, payment processing).",
      ],
    },
  ],
};

const WorkExperience = () => {
  return (
    <>
      <div className="items-center flex flex-wrap">
        {workExperiences.experience.map((item, i) => {
          return (
            <div key={i} className="w-[500px] m-2 p-2 ">
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

import React from "react";

const workExperiences = {
  experience: [
    {
      role: "FrontEnd Developer",
      company: "Tata Consultancy Services",
      companylogo: require("../components/assets/company/TCS.png"),
      date: "Feb 2022 – Present",
      desc: " Currently member of Frontend team which deals with a Government Project (Passport Seva) which is maintained by Ministry of External of Affairs.",
      descBullets: [
        "Implemented new features and enhancements for the client’s web application, ensuring functionality aligned with business requirements which leads to increase app’s performance by 30%.",
      ],
    },
    {
      role: "FrontEnd Developer",
      company: "WebGen Technologies ",
      companylogo: require("../components/assets/company/WEBGEN.jpg"),
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
      <div className="flex justify-evenly ">
        {workExperiences.experience.map((item, i) => {
          return (
            <div key={i} className="p-6 m-2 shadow-slate-950">
              <div  className="bg-green-200 rounded-xl shadow-lg shadow-indigo-400/40 hover:shadow-indigo-800/80 w-[400px] ">
                <p className="font-bold text-xl text-center">{item.company}</p>
                <div className="flex justify-center items-center "><img className="rounded-xl" src={item.companylogo} alt="company-logo" /></div>
                <p className="text-center font-bold text-xl antialiased">{item.role}</p>
                <p className="text-center text-lg">{item.date}</p>
                <p className="font-serif text-pretty">- {item.desc}</p>
                <p className="font-serif text-pretty">- {item.descBullets}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkExperience;

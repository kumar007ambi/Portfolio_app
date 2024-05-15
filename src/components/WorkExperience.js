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
      ],
    },
    {
      role: "FrontEnd Developer",
      company: "Webgen Technologies ",
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
      <div className="flex justify-center ">
        {workExperiences.experience.map((item, i) => {
          return (
            <div key={i} className="">
              <div  className="bg-cyan-300 w-[400px] ">
                <p className="font-bold text-xl">{item.company}</p>
                <div className="w-"><img src={item.companylogo} alt="company-logo" /></div>
                <p>{item.role}</p>
                <p>{item.date}</p>
                <p>{item.desc}</p>
                <p>{item.descBullets}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkExperience;

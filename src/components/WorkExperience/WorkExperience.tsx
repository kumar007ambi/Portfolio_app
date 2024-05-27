import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function WorkExperience() {
  return (
    <Container id="workexperience">
      <h2>My Work Experience</h2>
      <div className="workexperiences">
        <ScrollAnimation animateIn="flipInY">
          <div className="workexperience">
            <header style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
                <h3 style={{color:"white"}}>Tata Consultancy Services</h3>
              </a>
            </header>
            <div className="body">
              <p style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={require("../assets/company/TCS.png")}
                  alt="Netflix_GPT"
                />
              </p>
              <p>
                Currently member of Frontend team which deals with a Government
                Project (Passport Seva) which is maintained by Ministry of
                External of Affairs.
              </p>
              <p>
                Implemented new features and enhancements for the client’s web
                application, ensuring functionality aligned with business
                requirements which leads to increase app’s performance by 30%.
              </p>
            </div>
            <footer>
              <p>Feb 2022 – Present</p>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY">
          <div className="workexperience">
            <header style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="https://www.webgentechnologies.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 style={{color:"white"}}>WebGen Technologies</h3>
              </a>
            </header>
            <div className="body">
              <p style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  src={require("../assets/company/WEBGEN.jpg")}
                  alt="Netflix_GPT"
                />
              </p>
              <p>
                Designed and developed a full‑stack application from scratch,
                enabling user registration, login, and personalized dashboards.
                (Keywords: Full‑Stack, application development, user
                management).
              </p>
              <p>
                Successfully integrated the Stripe API to streamline the payment
                process within the application. (Keywords: API integration,
                Stripe, payment processing).
              </p>
            </div>
            <footer>
              <p>May 2021 – Aug 2021</p>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

//  <>
//       <div id="workexperience" className="flex justify-evenly h-[500px]">
//         {workExperiences.experience.map((item, i) => {
//           return (
//             <div key={i} className="p-6 m-2 shadow-slate-950">
//               <div  className="bg-green-200 rounded-xl shadow-lg shadow-indigo-400/40 hover:shadow-indigo-800/80 w-[400px] ">
//                 <p className="font-bold text-xl text-center">{item.company}</p>
//                 <div className="flex justify-center items-center "><img className="rounded-xl" src={item.companylogo} alt="company-logo" /></div>
//                 <p className="text-center font-bold text-xl antialiased">{item.role}</p>
//                 <p className="text-center text-lg">{item.date}</p>
//                 <p className="font-serif text-pretty">- {item.desc}</p>
//                 <p className="font-serif text-pretty">- {item.descBullets}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>

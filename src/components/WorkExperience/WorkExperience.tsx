import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function WorkExperience() {
  return (
    <Container id="workexperience">
      <div className="workexperience-left">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <div
            className="imageL"
            style={{ height: "100%", width: "100%", marginLeft: "0px" }}
          >
            <img src={require("../assets/company/TCS.png")} alt="TCS" />
          </div>
          {/* <div className="work-text">
            <p>
              Currently member of Frontend team which deals with a Government
              Project (Passport Seva) which is maintained by Ministry of
              External of Affairs.
            </p>
            <p style={{ marginTop: "20px" }}>
              Begins international interaction with Alcoa corporation, worked on
              a client's app. Implemented new features and enhancements for the
              client's web application,by using ReactJs, bootstrap, and redux
              toolkit.
            </p>
          </div> */}
        </ScrollAnimation>
      </div>
      <div className="workexperience-right">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          {/* <div
            className="imageR"
            style={{ height: "100%", width: "100%", marginLeft: "88px" }}
          >
            <img src={require("../assets/company/WEBGEN.jpg")} alt="WEBGEN" />
          </div>
          <div className="work-text">
            <p>
              Designed and developed a full‑stack application from scratch,
              enabling user registration, login, and personalized dashboards.
              (Keywords: Full‑Stack, application development, user management).
            </p>
            <p style={{ marginTop: "20px" }}>
              Successfully integrated the Stripe API to streamline the payment
              process within the application. (Keywords: API integration,
              Stripe, payment processing).
            </p>
          </div> */}
          {/* <div className="work-text">
            <p>
              Currently member of Frontend team which deals with a Government
              Project (Passport Seva) which is maintained by Ministry of
              External of Affairs.
            </p>
            <p style={{ marginTop: "20px" }}>
              Begins international interaction with Alcoa corporation, worked on
              a client's app. Implemented new features and enhancements for the
              client's web application,by using ReactJs, bootstrap, and redux
              toolkit.
            </p>
          </div> */}

          <div className="work-text">
            <p>
              Working on Government e Marketplace (GeM) project, utilizing
              Microfrontend architecture, Redux, and Material UI shared library
              for scalable and maintainable frontend development.
            </p>

            <p style={{ marginTop: "20px" }}>
              Successfully delivered the Government Passport Seva project to the
              Ministry of External Affairs, using ReactJS and react-hook-form
              for robust frontend development. The project is now deployed and
              used globally by government agencies.
            </p>

            <p style={{ marginTop: "20px" }}>
              Begins international interaction with Alcoa corporation, worked on
              a client's app. Implemented new features and enhancements for the
              client's web application, by using ReactJs, bootstrap, and redux
              toolkit.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

// <Container id="workexperience">
//   <h2>My Work Experience</h2>
//   <div className="workexperiences">
//     <ScrollAnimation animateIn="flipInY">
//       <div className="workexperience">
//         <header style={{ display: "flex", justifyContent: "center" }}>
//           <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
//             <h3 style={{color:"white"}}>Tata Consultancy Services</h3>
//           </a>
//         </header>
//         <div className="body">
//           <p style={{ display: "flex", justifyContent: "center" }}>
//             <img
//               src={require("../assets/company/TCS.png")}
//               alt="Netflix_GPT"
//             />
//           </p>
//           <p>
//             Currently member of Frontend team which deals with a Government
//             Project (Passport Seva) which is maintained by Ministry of
//             External of Affairs.
//           </p>
//           <p>
//             Implemented new features and enhancements for the client’s web
//             application, ensuring functionality aligned with business
//             requirements which leads to increase app’s performance by 30%.
//           </p>
//         </div>
//         <footer>
//           <p>Feb 2022 – Present</p>
//         </footer>
//       </div>
//     </ScrollAnimation>

//     <ScrollAnimation animateIn="flipInY">
//       <div className="workexperience">
//         <header style={{ display: "flex", justifyContent: "center" }}>
//           <a
//             href="https://www.webgentechnologies.com/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <h3 style={{color:"white"}}>WebGen Technologies</h3>
//           </a>
//         </header>
//         <div className="body">
//           <p style={{ display: "flex", justifyContent: "center" }}>
//             {" "}
//             <img
//               src={require("../assets/company/WEBGEN.jpg")}
//               alt="Netflix_GPT"
//             />
//           </p>
//           <p>
//             Designed and developed a full‑stack application from scratch,
//             enabling user registration, login, and personalized dashboards.
//             (Keywords: Full‑Stack, application development, user
//             management).
//           </p>
//           <p>
//             Successfully integrated the Stripe API to streamline the payment
//             process within the application. (Keywords: API integration,
//             Stripe, payment processing).
//           </p>
//         </div>
//         <footer>
//           <p>May 2021 – Aug 2021</p>
//         </footer>
//       </div>
//     </ScrollAnimation>
//   </div>
// </Container>

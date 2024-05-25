import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import github from "../assets/svgImages/github.svg";
import externalLink from "../assets/svgImages/external-link.svg";

// const openSourceContribution = {
//   projectsContribution: [
//     {
//       title: "Social Winter Of Code Season 4",
//       logo: require("../assets/openSource/SWOC4.png"),
//       date: "Jan 2024 – Feb 2024",
//     },
//     {
//       title: "Hacktoberfest 2023",
//       logo: require("../assets/openSource/HACTOBERFEST2023.jpg"),
//       date: "Oct 2023 – Oct 2023",
//     },
//     {
//       title: "Social Summer of Code 2023",
//       logo: require("../assets/openSource/SWOC2.png"),
//       date: "June 2023 – July 2023",
//     },
//     {
//       title: "GirlScript Summer of Code 2023",
//       logo: require("../assets/openSource/GSSOC2023.png"),
//       date: "May 2023– Aug 2023",
//     },
//   ],
// };

export function OpenSource() {
  return (
    <Container id="opensource">
      <h2>Open Source Contribution</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Social Winter Of Code Season 4</h3>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  src={require("../assets/openSource/SWOC4.png")}
                  alt="SWOC4"
                />
              </p>
            </div>
            <footer>
              <p>Jan 2024 – Feb 2024</p>
              <p>
                <a
                  href="https://certificate.givemycertificate.com/c/34786793-915a-4303-82fb-42fdc2152567"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificate
                </a>
              </p>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Hacktoberfest 2023</h3>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  src={require("../assets/openSource/HACTOBERFEST2023.jpg")}
                  alt="Hacktoberfest2023"
                />
              </p>
            </div>
            <footer>
              <p>Oct 2023 – Oct 2023</p>
              <p>
                <a
                  href="https://www.holopin.io/@kumar007ambi#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificate
                </a>
              </p>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Social Summer of Code 2023</h3>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                {" "}
                <img
                  src={require("../assets/openSource/SWOC2.png")}
                  alt="SWOC2"
                />
              </p>
            </div>
            <footer>
              <p>June 2023 – July 2023</p>
              <p style={{textDecoration:"none"}}>
                <a
                  href="https://www.holopin.io/@kumar007ambi#"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  Certificate
                </a>
              </p>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

// <>
//     <div id="opensource" className="h-[500px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2   justify-evenly ">
//       {openSourceContribution.projectsContribution.map((item, i) => {
//         return (
//           <div key={i} className="p-2 m-2 shadow-slate-950">
//             <div  className="bg-green-200 rounded-xl shadow-lg shadow-indigo-400/40 hover:shadow-indigo-800/80 w-[200px] ">
//               <p className="font-bold text-xl text-center">{item.title}</p>
//               <div className="flex justify-center items-center "><img className="rounded-xl" src={item.logo} alt="company-logo" /></div>
//               <p className="font-serif text-pretty">{item.date}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </>

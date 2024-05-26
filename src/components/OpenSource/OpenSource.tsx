import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function OpenSource() {
  return (
    <Container id="opensource">
      <h2>Open Source Contribution</h2>
      <div className="opensources">
        <ScrollAnimation animateIn="flipInY"  animateOut='flipOutY'>
          <div className="opensource">
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

        <ScrollAnimation animateIn="flipInY"  animateOut='flipOutY'>
          <div className="opensource">
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

        <ScrollAnimation animateIn="flipInY"  animateOut='flipOutY'>
          <div className="opensource">
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
                  href="https://certificate.givemycertificate.com/c/33aa5b3a-ef2c-42be-9682-5cb3a30d6bcf"
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



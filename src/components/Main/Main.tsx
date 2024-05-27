import { Container } from "./styles";
import { Skills } from "../Skills/Skills";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { Projects } from "../Projects/Projects";
import { OpenSource } from "../OpenSource/OpenSource";
import { Home } from "../Home/Home";
import {Particle} from '../styles/Particle';

export function Main() {
  return (
     <Container>
      <Particle></Particle>
      <Home></Home>
      <Skills></Skills>
      <WorkExperience></WorkExperience>
      <Projects></Projects>
      <OpenSource></OpenSource>
    </Container>
  );
}

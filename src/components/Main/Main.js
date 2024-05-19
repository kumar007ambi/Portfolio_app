import { Skills } from "../Skills/Skills";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { Projects } from "../Projects/Projects";
import { OpenSource } from "../OpenSource/OpenSource";
import { ContactMe } from "../Contact/ContactMe";
import { Greetings } from "../Greetings/Greetings";


export function Main() {
  return (
    <>
      <Greetings></Greetings>
      <Skills></Skills>
      <WorkExperience></WorkExperience>
      <Projects></Projects>
      <OpenSource></OpenSource>
      <ContactMe></ContactMe>
    </>
  );
}

import { skillsData } from "../../data/skillsData";
import Presentation from "./Presentation";
import Skills from "./Skills";

export default function PresentationSkills() {
  return (
    <div className="fade-in">
      <Presentation />
      <Skills skills={skillsData} />
    </div>
  );
}

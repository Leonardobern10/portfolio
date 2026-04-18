import { statsData } from "../../data/statsData";
import HeaderAbout from "./HeaderAbout";
import PresentationSkills from "./PresentationSkills";
import Stats from "./Stats/Stats";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-[1100px] mx-auto px-10">
        {/* Header */}
        <HeaderAbout />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left — Text + Skills */}
          <PresentationSkills />

          {/* Right — Stats */}
          <Stats data={statsData} />
        </div>
      </div>
    </section>
  );
}

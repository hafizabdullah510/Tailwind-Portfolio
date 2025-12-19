import SectionTitle from "./SectionTitle";
import { skills } from "../data";
const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="align-element">
        <SectionTitle text="tech stack" />
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const { id, title, icon, text } = skill;
            return (
              <article>
                <span>{icon}</span>
                <h4 className="text-lg mt-6 font-bold tracking-wide md:text-xl">
                  {" "}
                  {title}
                </h4>
                <p className="text-slate-500 mt-2">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

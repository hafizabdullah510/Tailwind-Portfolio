import aboutImg from "../images/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="align-element grid gap-16 md:grid-cols-2 md:items-center">
        <img src={aboutImg} alt="about" className="w-full h-64" />
        <div>
          <SectionTitle text="about" />
          <p className="text-slate-500 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatum aliquid eveniet impedit. Odit doloribus vero saepe
            quisquam doloremque ad est? Deleniti aliquam, fuga repellat pariatur
            quibusdam voluptate distinctio officia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

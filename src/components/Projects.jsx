import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="align-element">
        <SectionTitle text="projects" />
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const { id, img, url, github, title, text } = project;
            return (
              <article
                className="rounded md:rounded-lg bg-white shadow-sm hover:shadow-lg duration-300"
                key={id}
              >
                <img
                  src={img}
                  alt={title}
                  className="h-64 w-full rounded-t md:rounded-t-lg"
                />
                <div className="p-8">
                  <h2 className="text-xl tracking-wide capitalize">{title}</h2>
                  <p className="text-slate-500 mt-2">{text}</p>
                  <div className="flex gap-2 mt-4">
                    <a href={github} target="_blank">
                      <FaGithub className="w-8 h-8 text-slate-500 hover:text-slate-800 duration-300" />
                    </a>
                    <a href={url} target="_blank">
                      <TbWorldWww className="w-8 h-8 text-slate-500 hover:text-slate-800 duration-300" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

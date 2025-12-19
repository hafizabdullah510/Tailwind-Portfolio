import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import heroImg from "../images/hero.svg";
const Hero = () => {
  return (
    <section className="bg-sky-100 py-24">
      <div className="align-element grid md:grid-cols-2 md:items-center gap-8">
        <div>
          <h2 className="text-6xl tracking-wider text-black font-bold capitalize">
            i'm abdullah
          </h2>
          <p className="text-3xl text-slate-700 capitalize mt-4 tracking-wide">
            front-end developer
          </p>
          <p className="text-lg capitalize text-slate-500 tracking-wide">
            turning ideas into reality
          </p>
          <div className="flex gap-4 mt-4">
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-sky-500 hover:scale-110 duration-300 cursor-pointer" />
            <FaGithub className="h-8 w-8 text-slate-500 hover:scale-110 hover:text-sky-500 duration-300 cursor-pointer" />
            <FaTwitter className="h-8 w-8 text-slate-500 hover:scale-110 hover:text-sky-500 duration-300 cursor-pointer" />
          </div>
        </div>
        <article className="hidden md:block">
          <img className="w-full h-80 lg:h-96" src={heroImg} alt="hero-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

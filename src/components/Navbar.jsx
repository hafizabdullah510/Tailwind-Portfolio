import { links } from "../data";
const Navbar = () => {
  return (
    <nav id="home" className="bg-sky-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-2xl capitalize tracking-wider font-bold">
          abdullah
          <span className="text-sky-500"> tariq</span>
        </h2>
        <ul className="flex gap-x-3 capitalize">
          {links.map(({ id, href, text }) => (
            <li key={id}>
              <a
                className="hover:text-sky-500 duration-300 text-lg"
                href={href}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

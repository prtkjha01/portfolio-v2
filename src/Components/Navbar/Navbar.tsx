import "./Navbar.css";
import { navItems } from "@/constants";
const Navbar = () => {
  return (
    <nav className="navbar-main flex justify-between px-16 py-5 font-bold ">
      <div>
        <h5 className="">Prateek Jha</h5>
      </div>
      <div>
        <ul className="flex gap-8">
          {navItems.map((navItem) => (
            <li
              className="cursor-pointer "
              key={navItem.id}
              onClick={() => {
                document
                  .getElementById(navItem.to)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

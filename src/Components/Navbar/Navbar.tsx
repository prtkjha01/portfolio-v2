import "./Navbar.css";
import { navItems } from "@/constants";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav className="navbar-main flex justify-between lg:px-16 sm:px-8 py-5 font-bold ">
      <div>
        <h5 className="">Prateek Jha</h5>
      </div>
      <div className="desktop-view">
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

      <div className="mobile-view">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          fill="#fff"
          className="bi bi-three-dots-vertical  cursor-pointer"
          viewBox="0 0 16 16"
          onClick={handleShowMenu}
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
        {showMenu && (
          <div className="menu bg-purple-950 p-4">
            {navItems.map((navItem) => (
              <li
                className="cursor-pointer text-[12px] my-3"
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

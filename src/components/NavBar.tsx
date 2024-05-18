import { NavLink } from "react-router-dom";
import { Navigation } from "../types/navigation";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigationItems: Navigation[] = [
    { title: "Accueil", path: "/:id", id: 1 },
    { title: "Profil", path: "/Profil", id: 2 },
    { title: "Réglage", path: "/Reglage", id: 3 },
    { title: "Communauté", path: "/Communaute", id: 4 },
  ];

  return (
    <div className="min-w-screen h-20 overflow-hidden nav-shadow">
      <div className="flex gap-3 items-center mt-auto h-full ml-5">
        <div className="flex items-center gap-2 w-1/5">
          <img src={logo} alt="" className=" h-14" />
          <h1 className="text-[#E60000] text-2xl font-extralight">SportSee</h1>
        </div>
        <nav className="w-2/3">
          <ul className="flex justify-between">
            {navigationItems.map((item) => (
              <li className="text-white text-2xl font-light" key={item.id}>
                <NavLink
                  to={item.path}
                  className="hover:text-red-400 link link-underline link-underline-black"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

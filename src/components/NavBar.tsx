import { NavLink } from "react-router-dom";
import { Navigation, Icon } from "../types/navigation";
import logo from "../assets/images/logo.png";
import iconBike from "../assets/icons/icon_bike.png";
import iconMuscle from "../assets/icons/icon_muscle.png";
import iconSwim from "../assets/icons/icon_swim.png";
import iconZen from "../assets/icons/icon_zen.png";

const Navbar = () => {
  const navigationItems: Navigation[] = [
    { title: "Accueil", path: "/", id: 1 },
    { title: "Profil", path: "/Profil", id: 2 },
    { title: "Réglage", path: "/Reglage", id: 3 },
    { title: "Communauté", path: "/Communaute", id: 4 },
  ];

  const iconsItems: Icon[] = [
    { path: iconZen, id: 4, name: "Icône Zen" },
    { path: iconSwim, id: 3, name: "Icône natation" },
    { path: iconBike, id: 1, name: "Icône Bike" },
    { path: iconMuscle, id: 2, name: "Icône musculation" },
  ];

  return (
    <div>
      <div className="w-full bg-black h-20 shadow-md">
        <div className="flex gap-3 items-center mt-auto h-full ml-5">
          <div className="flex items-center gap-2 w-1/5">
            <img src={logo} alt="" className=" h-14" />
            <h1 className="text-[#E60000] text-2xl font-extralight">
              SportSee
            </h1>
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
      <div className="h-[92vh] bg-black w-28 overflow-hidden">
        <nav className="h-2/3">
          <ul className="flex flex-col items-center justify-center h-full gap-5">
            {iconsItems.map((icon) => (
              <li
                className="text-white text-2xl font-light cursor-pointer"
                key={icon.id}
              >
                <img src={icon.path} alt={icon.name} className="h-16" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-1/3 flex items-end justify-center pb-36">
          <p className="text-white text-xs -rotate-90  whitespace-nowrap">
            Copyright, SportSee 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

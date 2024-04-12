import iconBike from "../assets/icons/icon_bike.png";
import { Icon } from "../types/navigation";
import iconMuscle from "../assets/icons/icon_muscle.png";
import iconSwim from "../assets/icons/icon_swim.png";
import iconZen from "../assets/icons/icon_zen.png";

const SideBar = () => {
  const iconsItems: Icon[] = [
    { path: iconZen, id: 4, name: "Icône Zen" },
    { path: iconSwim, id: 3, name: "Icône natation" },
    { path: iconBike, id: 1, name: "Icône Bike" },
    { path: iconMuscle, id: 2, name: "Icône musculation" },
  ];
  return (
    <div className="xl:h-[92vh] lh:h-screen bg-black lg:w-fit xl:w-28">
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
  );
};

export default SideBar;

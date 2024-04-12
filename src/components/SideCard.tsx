import { User } from "../types/user.ts";
import React, { useEffect, useState } from "react";
import iconCalories from "../assets/icons/calories-icon.png";
import iconProtein from "../assets/icons/protein-icon.png";
import iconGlucide from "../assets/icons/carbs-icon.png";
import iconLipide from "../assets/icons/fat-icon.png";

type SideCardProps = {
  userData: User | null;
};

export const SideCard: React.FC<SideCardProps> = ({ userData }) => {
  const [calories, setCalories] = useState<string>("");

  function convertCaloriesToUsLocales() {
    if (userData?.keyData === undefined) {
      return;
    }

    if (userData?.keyData.calorieCount > 1000) {
      setCalories(userData.keyData.calorieCount.toLocaleString("en-US"));
    }
  }

  useEffect(() => {
    convertCaloriesToUsLocales();
  });

  return (
    <div className="mt-[7.3%] xl:ml-10 w-fit lg:grid lg:grid-cols-2 lg:gap-5 lg:w-full lg:ml-0 xl:flex xl:flex-col xl:justify-between">
      <div className=" p-10 bg-[#FBFBFB] lg:max-h-[140px] rounded-lg">
        <div className={"flex items-center gap-6"}>
          <img
            src={iconCalories}
            alt="Icon feu pour représenter les calories brulés"
          />
          <div className="flex flex-col">
            <h2 className={"font-bold"}>{calories}kCal</h2>
            <p className="text-xs">Calories</p>
          </div>
        </div>
      </div>
      <div className=" p-10 bg-[#FBFBFB] lg:max-h-[140px] rounded-lg lg:my-0">
        <div className={"flex items-center gap-6"}>
          <img
            src={iconProtein}
            alt="Icon feu pour représenter les proteines en grammes"
            className="h-14"
          />
          <div className="flex flex-col">
            <h2 className={"font-bold"}>{userData?.keyData.proteinCount}g</h2>
            <p className="text-xs">Proteines</p>
          </div>
        </div>
      </div>
      <div className=" p-10 bg-[#FBFBFB] lg:max-h-[140px] rounded-lg my-[27px] lg:my-0">
        <div className={"flex items-center gap-6"}>
          <img
            src={iconGlucide}
            alt="Icon feu pour représenter les glucides en grammes"
            className="h-14"
          />
          <div className="flex flex-col">
            <h2 className={"font-bold"}>
              {userData?.keyData.carbohydrateCount}g
            </h2>
            <p className="text-xs">Glucides</p>
          </div>
        </div>
      </div>
      <div className=" p-10 bg-[#FBFBFB] rounded-lg">
        <div className={"flex items-center gap-6"}>
          <img
            src={iconLipide}
            alt="Icon feu pour représenter les lipides en gramme"
            className="h-14"
          />
          <div className="flex flex-col">
            <h2 className={"font-bold"}>{userData?.keyData.lipidCount}g</h2>
            <p className="text-xs">Lipides</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import {User} from "../types/user.ts";
import React from "react";
import iconCalories from '../assets/icons/calories-icon.png'
import iconProtein from '../assets/icons/protein-icon.png'
import iconGlucide from '../assets/icons/carbs-icon.png'
import iconLipide from '../assets/icons/fat-icon.png'
type SideCardProps = {
    userData: User | null;
};

export const SideCard: React.FC<SideCardProps> = ({userData}) => {

    return (
        <div className="mt-[10%] ml-10 w-fit">
            <div className=" py-6 px-8 bg-[#FBFBFB] rounded-lg">
                <div className={"flex items-center gap-6"}>
                    <img src={iconCalories} alt="Icon feu pour représenter les calories brulés"/>
                    <div className="flex flex-col">
                        <h2 className={"font-bold"}>
                            {userData?.keyData.calorieCount}kCal
                        </h2>
                        <p className="text-xs">Calories</p>
                    </div>
                </div>
            </div>
            <div className=" py-6 px-8 bg-[#FBFBFB] rounded-lg my-10">
                <div className={"flex items-center gap-6"}>
                    <img src={iconProtein} alt="Icon feu pour représenter les proteines en grammes" className="h-14"/>
                    <div className="flex flex-col">
                        <h2 className={"font-bold"}>
                            {userData?.keyData.proteinCount}g
                        </h2>
                        <p className="text-xs">Proteine</p>
                    </div>
                </div>
            </div>
            <div className=" py-6 px-8 bg-[#FBFBFB] rounded-lg my-10">
                <div className={"flex items-center gap-6"}>
                    <img src={iconGlucide} alt="Icon feu pour représenter les glucides en grammes" className="h-14"/>
                    <div className="flex flex-col">
                        <h2 className={"font-bold"}>
                            {userData?.keyData.carbohydrateCount}g
                        </h2>
                        <p className="text-xs">Glucides</p>
                    </div>
                </div>
            </div>
            <div className=" py-6 px-8 bg-[#FBFBFB] rounded-lg">
                <div className={"flex items-center gap-6"}>
                    <img src={iconLipide} alt="Icon feu pour représenter les lipides en gramme" className="h-14"/>
                    <div className="flex flex-col">
                        <h2 className={"font-bold"}>
                            {userData?.keyData.lipidCount}g
                        </h2>
                        <p className="text-xs">lipides</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
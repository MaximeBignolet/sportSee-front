import React from "react";
import { User } from "../../types/user";

type DashboardHeaderProps = {
  userData: User | null;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userData }) => {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold">
          Bonjour
          <span className="text-[#FF0101] font-medium inline-block ml-2">
            {userData?.userInfos.firstName}
          </span>
        </h2>
        <p className="pt-5">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;

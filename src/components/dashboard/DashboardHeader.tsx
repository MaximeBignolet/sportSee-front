import React from "react";
import { User } from "../../models/User";

type DashboardHeaderProps = {
  userData: User;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userData }) => {
  return (
    <div className="lg:pt-5 xl:pt-0">
      <div>
        <h2 className="text-5xl font-bold">
          Bonjour
          {userData ? (
            <span className="text-[#FF0101] font-medium inline-block ml-4">
              {userData.firstname}
            </span>
          ) : (
            <p>Erreur dans la récupération du prénom</p>
          )}
        </h2>
        <p className="pt-5">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;

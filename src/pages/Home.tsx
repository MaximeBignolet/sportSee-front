import DashboardHeader from "../components/dashboard/DashboardHeader";
import { useEffect, useState } from "react";
import { fetchUserData } from "../services/userServices.ts";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import { SideCard } from "../components/SideCard.tsx";
import DashboardCoMainCharts from "../components/dashboard/DashboardCoMainCharts.tsx";
import { useParams } from "react-router-dom";
import { User } from "../models/User.ts";
import NotFound from "../components/NotFound.tsx";

const Home = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchUserData(id).then((data) => {
        setUser(data);
      });
    }
  }, [id]);

  return (
    <div className="w-full h-full">
      {user?.id ? (
        <div className="container mx-auto pt-10 lg:pl-10 px-0 h-max">
          {user ? (
            <DashboardHeader userData={user} />
          ) : (
            <p>Erreur dans la récupération des données</p>
          )}
          <div className="2xl:flex-row xl:flex xl:flex-col w-full h-full mt-[5%]">
            <div className="flex flex-col justify-between lg:gap-10 2xl:gap-0">
              <DashboardCharts />
              {user ? (
                <DashboardCoMainCharts userData={user} />
              ) : (
                <p>Erreur dans la récupération des données</p>
              )}
            </div>
            {user ? (
              <div className="lg:pr-5 2xl:pr-0 2xl:h-[800px]">
                <SideCard userData={user} />
              </div>
            ) : (
              <p>Erreur dans la récupération des données</p>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Home;

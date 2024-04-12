import DashboardHeader from "../components/dashboard/DashboardHeader";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { fetchUserData } from "../services/userServices.ts";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import { SideCard } from "../components/SideCard.tsx";
import DashboardCoMainCharts from "../components/dashboard/DashboardCoMainCharts.tsx";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserData(18).then((data) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div className="container mx-auto xl:px-[6%] xl:pt-[5vh] lg:px-[4%]">
      <DashboardHeader userData={user} />
      <div className="xl:flex-row xl:items-start lg:flex lg:flex-col">
        <div className="flex flex-col gap-5">
          <DashboardCharts />
          <DashboardCoMainCharts userData={user} />
        </div>
        <SideCard userData={user} />
      </div>
    </div>
  );
};

export default Home;

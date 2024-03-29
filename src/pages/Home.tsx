import DashboardHeader from "../components/dashboard/DashboardHeader";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { fetchUserData } from "../services/userServices.ts";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import {SideCard} from "../components/SideCard.tsx";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserData(18).then((data) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div className="container mx-auto px-[10%] pt-[5vh]">
      <DashboardHeader userData={user} />
      <div className="flex items-start">
      <DashboardCharts />
        <SideCard userData={user} />
      </div>
    </div>
  );
};

export default Home;

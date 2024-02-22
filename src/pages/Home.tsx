import DashboardHeader from "../components/dashboard/DashboardHeader";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { fetchUserData } from "../services/fetchData";
import DashboardCharts from "../components/dashboard/DashboardCharts";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    fetchUserData(18).then((data) => {
      setUser(data?.data.data);
    });
  }, []);
  return (
    <div className="container mx-auto px-[10%] pt-[5vh]">
      <DashboardHeader userData={user} />
      <DashboardCharts />
    </div>
  );
};

export default Home;

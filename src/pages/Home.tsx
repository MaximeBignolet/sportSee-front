import DashboardHeader from "../components/dashboard/DashboardHeader";
import {useEffect, useState} from "react";
import {User} from "../types/user";
import {fetchUserData} from "../services/userServices.ts";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import {SideCard} from "../components/SideCard.tsx";
import {DashboardCoMainCharts} from "../components/dashboard/DashboardCoMainCharts.tsx";

const Home = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUserData(18).then((data) => {
            setUser(data.data);
        });
    }, []);
    return (
        <div className="container mx-auto px-[6%] pt-[5vh]">
            <DashboardHeader userData={user}/>
            <div className="flex items-start">
                <div className="flex flex-col gap-5">
                    <DashboardCharts/>
                    <DashboardCoMainCharts/>
                </div>
                <SideCard userData={user}/>
            </div>
        </div>
    );
};

export default Home;

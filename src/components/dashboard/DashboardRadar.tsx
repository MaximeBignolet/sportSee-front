import {useEffect, useState} from "react";
import {UserPerformance} from "../../types/user.ts";
import {fetchUserPerf} from "../../services/userServices.ts";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart} from "recharts";


export const DashboardRadar = () => {
    const [userPerfomance, setUserPerformance] = useState<UserPerformance | null>(null);
    useEffect(() => {
        fetchUserPerf(18).then((data) => {
            setUserPerformance(data?.data.data);
        });
    }, []);


    return (
        <div>
            <RadarChart width={280} height={250} outerRadius="80%" data={userPerfomance?.kind}>
                <PolarGrid />
                <PolarAngleAxis dataKey="value" />
                <PolarRadiusAxis />
                <RadarChart  dataKey="kind" />
            </RadarChart>
        </div>
    );
};
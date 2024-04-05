import {useEffect, useState} from "react";
import {UserAverageSession} from "../../types/user.ts";
import {fetchUserAverageSessions} from "../../services/userServices.ts";
import {Line, LineChart, Tooltip, XAxis} from "recharts";
import {DashboardRadar} from "./DashboardRadar.tsx";


export function DashboardCoMainCharts() {
    const [userSession, setUserSession] = useState<UserAverageSession | null>(null);

    useEffect(() => {
        fetchUserAverageSessions(18).then((data) => {
            const daysMap = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
            const sessionsWithFormattedDay = data?.data.data.sessions.map((session: any) => ({
                ...session,
                day: daysMap[session.day - 1]
            }))
            setUserSession({
                ...data?.data.data,
                sessions: sessionsWithFormattedDay
            });
        });
    }, []);
    return (
        <div className={"flex justify-between"}>
            <LineChart width={280} height={250} data={userSession?.sessions} className="bg-[#F00] p-3 rounded-md">
                <text
                    x="50%"
                    y="7%"
                    textAnchor="middle"
                    style={{fontWeight: 500}}
                    fill={'white'}
                >
                    Durée moyenne des sessions
                </text>
                <XAxis dataKey="day" tick={{fill: 'white'}} axisLine={false} tickLine={false}/>
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    dot={false}
                />
            </LineChart>
           <DashboardRadar />
            <LineChart width={280} height={250} data={userSession?.sessions} className="bg-[#F00] p-3 rounded-md">
                <text
                    x="50%"
                    y="7%"
                    textAnchor="middle"
                    style={{fontWeight: 500}}
                    fill={'white'}
                >
                    Durée moyenne des sessions
                </text>
                <XAxis dataKey="day" tick={{fill: 'white'}} axisLine={false} tickLine={false}/>
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    dot={false}
                />
            </LineChart>
        </div>
    );
}
import { useEffect, useState } from "react";
import {
  AverageUserSessionArray,
  User,
  UserAverageSession,
} from "../../types/user.ts";
import { fetchUserAverageSessions } from "../../services/userServices.ts";
import { Line, LineChart, Tooltip, XAxis } from "recharts";
import { DashboardRadar } from "./DashboardRadar.tsx";
import DashboardPieChart from "./DashboardPieChart.tsx";

type DashboardCoMainProps = {
  userData: User | null;
};

const DashboardCoMainCharts: React.FC<DashboardCoMainProps> = ({
  userData,
}) => {
  const [userSession, setUserSession] = useState<UserAverageSession | null>(
    null
  );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchUserAverageSessions(18).then((data) => {
      const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
      const sessionsWithFormattedDay = data?.data.data.sessions.map(
        (session: AverageUserSessionArray) => ({
          ...session,
          day: daysMap[session.day - 1],
        })
      );
      setUserSession({
        ...data?.data.data,
        sessions: sessionsWithFormattedDay,
      });
    });

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={"flex justify-between"}>
      <LineChart
        width={width > 1024 ? 280 : 230}
        height={width > 1024 ? 250 : 200}
        data={userSession?.sessions}
        className="bg-[#F00] p-3 rounded-md"
      >
        <text
          x="50%"
          y="7%"
          textAnchor="middle"
          style={{ fontWeight: 500 }}
          fill={"white"}
        >
          Durée moyenne des sessions
        </text>
        <XAxis
          dataKey="day"
          tick={{ fill: "white" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
        />
      </LineChart>
      <DashboardRadar />
      <DashboardPieChart userData={userData} />
    </div>
  );
};

export default DashboardCoMainCharts;

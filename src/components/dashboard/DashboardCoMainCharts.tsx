import { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../services/userServices.ts";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { DashboardRadar } from "./DashboardRadar.tsx";
import DashboardPieChart from "./DashboardPieChart.tsx";
import { useParams } from "react-router-dom";
import { User, UserAverageSessions } from "../../models/User.ts";

type DashboardCoMainProps = {
  userData: User;
};

const DashboardCoMainCharts: React.FC<DashboardCoMainProps> = ({
  userData,
}) => {
  const [userSession, setUserSession] = useState<UserAverageSessions>();
  const { id } = useParams();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (id) {
      fetchUserAverageSessions(id).then((data) => {
        setUserSession(data);
      });
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);
  return (
    <div className={"flex justify-between"}>
      <div className="relative">
        <div className="absolute bg-black/20 z-10 w-[80px] h-[250px] right-0"></div>
        {userSession ? (
          <LineChart
            width={width > 1024 ? 280 : 230}
            height={width > 1024 ? 250 : 200}
            data={userSession?.sessions}
            className="bg-[#F00]  p-3 rounded-md"
          >
            <text
              x="35%"
              y="7%"
              textAnchor="middle"
              style={{ fontWeight: 500 }}
              fill={"rgba(255, 255, 255, 0.5)"}
            >
              Durée moyenne{" "}
              <tspan x="31%" dy="1.2em">
                des sessions
              </tspan>
            </text>
            <XAxis
              dataKey="day"
              tick={{ fill: "rgba(255, 255, 255, 0.5)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="number"
              domain={["dataMin", "dataMax + 15"]}
              axisLine={false}
              tickLine={false}
              tick={false}
              width={0}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot={false}
            />
          </LineChart>
        ) : (
          <p>Erreur dans la récupération des sessions</p>
        )}
      </div>
      <DashboardRadar />
      <DashboardPieChart userData={userData} />
    </div>
  );
};

export default DashboardCoMainCharts;

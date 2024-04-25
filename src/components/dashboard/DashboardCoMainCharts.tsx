import { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../services/userServices.ts";
import { Line, LineChart, Tooltip, XAxis } from "recharts";
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
    fetchUserAverageSessions(id).then((data) => {
      setUserSession(data);
    });

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

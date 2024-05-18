import React, { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../services/userServices";
import {
  Line,
  LineChart,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { DashboardRadar } from "./DashboardRadar";
import DashboardPieChart from "./DashboardPieChart";
import { useParams } from "react-router-dom";
import { User, UserAverageSessions } from "../../models/User";

type DashboardCoMainProps = {
  userData: User;
};

export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white p-3">
        {payload.slice(0, 1).map((el: any, index: number) => (
          <div key={index}>
            <small>{el.payload.sessionLength}min</small>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CustomCursor = ({ points, width, height }: any) => {
  const { x } = points[0];
  return (
    <Rectangle
      x={x}
      y={0}
      width={width - x}
      height={height}
      fill="black"
      opacity={0.2}
    />
  );
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
    <div className="flex justify-between">
      <div
        className="relative"
        style={{
          width: width > 1163 ? 350 : 230,
          height: width > 1163 ? 300 : 200,
        }}
      >
        {userSession ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={userSession?.sessions}
              className="bg-[#F00]  rounded-md"
            >
              <text
                x="35%"
                y="12%"
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
                padding={{
                  left: 15,
                  right: 15,
                }}
              />
              <YAxis
                type="number"
                domain={["dataMin - 10", "dataMax + 20"]}
                axisLine={false}
                tickLine={false}
                tick={false}
                width={0}
              />
              <Tooltip
                content={<CustomTooltip payload={userSession.sessions} />}
                cursor={<CustomCursor height={800} width={800} />}
              />
              <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="white"
                dot={false}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </LineChart>
          </ResponsiveContainer>
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

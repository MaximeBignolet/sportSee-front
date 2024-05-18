import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { User } from "../../models/User";

type DashboardCoMainProps = {
  userData: User;
};

const DashboardPieChart: React.FC<DashboardCoMainProps> = ({ userData }) => {
  let data: object[] = [];
  const [width, setWidth] = useState(window.innerWidth);

  if (userData?.score) {
    data = [
      { id: "2", name: "L2", value: userData.userRemainPercentage },
      { id: "1", name: "L1", value: userData.userScorePercentage },
    ];
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const radius = width > 1024 ? 115 : 90;

  return (
    <div
      className={"bg-[#FBFBFB] flex justify-center flex-col mr-5 rounded-md"}
    >
      {userData ? (
        <PieChart
          width={width > 1163 ? 350 : 250}
          height={width > 1163 ? 230 : 200}
        >
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={width > 1163 ? radius : radius - 30}
            startAngle={90}
            endAngle={-270}
          >
            <Cell key="L2" fill="none" />
            <Cell key="L1" fill="red" />
          </Pie>
          <Pie
            data={[{ value: 100 }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={width > 1163 ? radius - 10 : radius - 40}
            fill="white"
            startAngle={90}
            endAngle={-270}
          />
          <text
            x={50}
            y={width > 1163 ? 10 : 20}
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight={700}
            fontSize={width > 1163 ? 18 : 15}
          >
            Score
          </text>
          <text
            x={width > 1163 ? 175 : 125}
            y={width > 1163 ? 90 : 80}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {userData ? (
              <tspan fontWeight={700} fontSize={20}>
                {userData.userScorePercentage}%
              </tspan>
            ) : (
              <tspan x="150" dy="20" fontSize={20}>
                Erreur dans la récupération des données
              </tspan>
            )}
            <tspan x={width > 1163 ? 175 : 125} dy={20} fontSize={18}>
              de votre
            </tspan>
            <tspan x={width > 1163 ? 175 : 125} dy={20} fontSize={18}>
              objectif
            </tspan>
          </text>
        </PieChart>
      ) : (
        <p>Erreur dans la récupération du score</p>
      )}
    </div>
  );
};

export default DashboardPieChart;

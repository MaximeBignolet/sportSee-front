import { Cell, Pie, PieChart } from "recharts";
import { User } from "../../types/user";
import { useEffect, useState } from "react";

type DashoardPieProps = {
  userData: User | null;
};

const DashboardPieChart: React.FC<DashoardPieProps> = ({ userData }) => {
  let data: object[] = [];
  const [width, setWidth] = useState(window.innerWidth);
  if (userData?.score) {
    const scorePercentage = userData?.score * 100;
    const remainPercentage = 100 - scorePercentage;
    data = [
      { id: "2", name: "L2", value: remainPercentage },
      { id: "1", name: "L1", value: scorePercentage },
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

  return (
    <div className={"bg-[#FBFBFB] p-4 rounded-md"}>
      <PieChart
        width={width > 1024 ? 300 : 200}
        height={width > 1024 ? 200 : 170}
      >
        <text x={25} y={10} textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
        <text
          x={width > 1024 ? 150 : 100}
          y={width > 1024 ? 80 : 60}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {userData ? (
            <>{userData.score * 100}%</>
          ) : (
            <tspan x="150" dy="20">
              Erreur dans la récupération des données
            </tspan>
          )}
          <tspan x={width > 1024 ? 150 : 100} dy={20}>
            de votre
          </tspan>
          <tspan x={width > 1024 ? 150 : 100} dy={20}>
            objectif
          </tspan>
        </text>
        <Pie
          data={data}
          dataKey="value"
          innerRadius="90%"
          outerRadius="100%"
          fill="red"
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          blendStroke
        >
          <Cell key="L2" fill="#CCC" />
          <Cell key="L1" fill="red" />
        </Pie>
      </PieChart>
    </div>
  );
};

export default DashboardPieChart;

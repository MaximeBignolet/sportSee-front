import { useEffect, useState } from "react";
import { fetchUserDataActivityData } from "../../services/userServices.ts";
import { UserActivity } from "../../types/user";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashboardCharts = () => {
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);
  useEffect(() => {
    fetchUserDataActivityData(18).then((data) => {
      setUserActivity(data?.data.data);
    });
  }, []);

  return (
    <div className="p-4 mt-[10%]  bg-[#FBFBFB] w-fit">
      <BarChart width={900} height={320} data={userActivity?.sessions}>
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis orientation="right" axisLine={false} />
        <text
          x="9.5%"
          y="7%"
          width={200}
          textAnchor="middle"
          style={{ fontWeight: 500 }}
        >
          Activité quotidenne
        </text>
        <Legend verticalAlign="top" align="right" height={70} />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="black"
          radius={[10, 10, 0, 0]}
          barSize={10}
          legendType="circle"
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="red"
          radius={[10, 10, 0, 0]}
          barSize={10}
          legendType="circle"
        />
      </BarChart>
    </div>
  );
};

export default DashboardCharts;

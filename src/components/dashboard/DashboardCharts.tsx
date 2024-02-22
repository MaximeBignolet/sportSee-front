import { useEffect, useState } from "react";
import { fetchUserDataActivityData } from "../../services/fetchUserActivityData";
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
    <div className="p-4 mt-[10%] bg-gray-100 w-fit">
      <BarChart width={835} height={320} data={userActivity?.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Legend verticalAlign="top" align="right" height={40} />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          fill="black"
          radius={[10, 10, 0, 0]}
          barSize={10}
          legendType="circle"
        />
        <Bar
          dataKey="calories"
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

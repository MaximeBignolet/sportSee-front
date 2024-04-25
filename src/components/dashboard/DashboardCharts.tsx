import { useEffect, useState } from "react";
import { fetchUserDataActivityData } from "../../services/userServices.ts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useParams } from "react-router-dom";
import { UserActivity } from "../../models/User.ts";

const DashboardCharts = () => {
  const [userActivity, setUserActivity] = useState<UserActivity>();
  const [width, setWidth] = useState(window.innerWidth);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchUserDataActivityData(id).then((data) => {
        setUserActivity(data);
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
    <div className="p-4 xl:mt-[10%] lg:pt-[3%]  bg-[#FBFBFB] w-fit">
      {userActivity ? (
        <BarChart
          width={width > 1024 ? 900 : 750}
          height={320}
          data={userActivity?.sessions}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
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
      ) : (
        <p>
          Erreur dans la récupération de l'activité quotidenne de l'utilisateur
        </p>
      )}
    </div>
  );
};

export default DashboardCharts;

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

export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#F00] p-3">
        {payload.slice(0, 1).map((el: any, index: number) => (
          <div key={index}>
            <small className="text-white">{el.payload.kilogram}kg</small> <br />
            <br />
            <small className="text-white">{el.payload.calories}Kcal</small>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

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
  });

  return (
    <div className="p-4 mr-5  bg-[#FBFBFB] w-fit">
      {userActivity ? (
        <BarChart
          width={width < 1163 ? 800 : 1200}
          height={width < 1163 ? 320 : 400}
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
          <Tooltip
            content={
              <CustomTooltip
                active={false}
                payload={userActivity.sessions}
                label={""}
              />
            }
          />
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

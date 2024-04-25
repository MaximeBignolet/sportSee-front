import { useEffect, useState } from "react";
import { fetchUserPerf } from "../../services/userServices.ts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { useParams } from "react-router-dom";
import { UserPerfomance } from "../../models/User.ts";

export const DashboardRadar = () => {
  const [data, setData] = useState<UserPerfomance>();
  const [width, setWidth] = useState(window.innerWidth);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchUserPerf(id).then((resp) => {
        setData(resp);
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
    <div>
      {data ? (
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          width={width > 1024 ? 300 : 250}
          height={width > 1024 ? 250 : 200}
          data={data?.data}
          style={{ background: "black", borderRadius: 6 }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kindDescription"
            fontSize={10}
            stroke="white"
            tickLine={false}
          />
          <Radar
            name="User"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.8}
          />
        </RadarChart>
      ) : (
        <p>Erreur dans la récupération des performances</p>
      )}
    </div>
  );
};

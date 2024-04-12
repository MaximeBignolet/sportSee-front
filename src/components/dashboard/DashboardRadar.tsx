import { useEffect, useState } from "react";
import { fetchUserPerf } from "../../services/userServices.ts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

export const DashboardRadar = () => {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchUserPerf(18).then((resp) => {
      const rawData = resp?.data.data;
      const kindMapping = rawData.kind;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const transformedData = rawData.data.map((el: any) => ({
        ...el,
        kind: kindMapping[el.kind],
      }));
      setData(transformedData);
    });

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        width={width > 1024 ? 300 : 250}
        height={width > 1024 ? 250 : 200}
        data={data}
        style={{ background: "black", borderRadius: 6 }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
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
    </div>
  );
};

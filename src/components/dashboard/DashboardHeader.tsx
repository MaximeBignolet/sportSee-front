import { useEffect } from "react";
import { fetchUserData } from "../../services/fetchData";

const DashboardHeader = () => {
  useEffect(() => {
    fetchUserData(18);
  }, []);
  return <div className="bg-red-500">Test</div>;
};

export default DashboardHeader;

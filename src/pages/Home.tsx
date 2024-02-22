import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user/18").then((data: any) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return <div></div>;
};

export default Home;

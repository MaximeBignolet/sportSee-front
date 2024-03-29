import axios from "axios";

const baseUrl: string = "http://localhost:3001/user/";

export const fetchUserData = async (userId: number) => {
  try {
    const resp = (await axios.get(`${baseUrl}${userId}`)).data;
    return resp;
  } catch (error) {
    console.error("Error fetching user Data", error);
    return null;
  }
};

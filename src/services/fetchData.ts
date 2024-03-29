import axios from "axios";

export const fetchUserData = async (userId: number) => {
  try {
    const resp = await axios.get(`http://localhost:3001/user/${userId}`);
    return resp;
  } catch (error) {
    console.error("Error fetching user Data", error);
    return null;
  }
};

import axios from "axios";

export const fetchUserDataActivityData = async (userId: number) => {
  try {
    const resp = await axios.get(
      `http://localhost:3001/user/${userId}/activity`
    );
    return resp;
  } catch (error) {
    console.error("Error fetching user Data", error);
    return null;
  }
};

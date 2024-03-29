import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL

export const fetchUserData = async (userId: number) => {
  try {
    const resp = (await axios.get(`${baseUrl}/user/${userId}`)).data;
    return resp;
  } catch (error) {
    console.error("Error fetching user Data", error);
    return null;
  }
};

export const fetchUserDataActivityData = async (userId: number) => {
  try {
    const resp = await axios.get(
        `${baseUrl}user/${userId}/activity`
    );
    return resp;
  } catch (error) {
    console.error("Error fetching user Data", error);
    return null;
  }
};

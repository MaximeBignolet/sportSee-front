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


export const fetchUserAverageSessions = async (userId: number) => {
  try {
    const resp = await axios.get(`${baseUrl}/user/${userId}/average-sessions`)
    return resp;
  }catch (e){
    console.log(e)
    return null;
  }
}

export const fetchUserPerf = async (userId: number) => {
  try {
    const resp = await axios.get(`${baseUrl}/user/${userId}/performance`)
    return resp;
  } catch (e) {
    console.log(e)
    return null;
  }
}
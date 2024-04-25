import axios from "axios";
import {
  User,
  UserActivity,
  UserAverageSessions,
  UserPerfomance,
} from "../models/User";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
import mockUserData from "../data/mockData.json";

export const fetchUserData = async (userId: string): Promise<User> => {
  try {
    const resp = (await axios.get(`${baseUrl}/user/${userId}`)).data;
    return User.userFromJson(resp.data);
  } catch (error) {
    console.error("API request failed, using mock data", error);
    const fallBackUser = mockUserData.USER_MAIN_DATA.find(
      (user) => user.id.toString() === userId
    );
    if (fallBackUser) {
      return User.userFromJson(fallBackUser);
    } else {
      console.error("User not found");
      throw new Error("User data is not available.");
    }
  }
};

export const fetchUserDataActivityData = async (
  userId: string
): Promise<UserActivity> => {
  try {
    const resp = (await axios.get(`${baseUrl}/user/${userId}/activity`)).data;
    return UserActivity.userActivityFromJson(resp.data);
  } catch (error) {
    console.error("API request failed, using mock data", error);
    const fallBackUserActivity = mockUserData.USER_ACTIVITY.find(
      (user) => user.userId.toString() === userId
    );

    if (fallBackUserActivity) {
      return UserActivity.userActivityFromJson(fallBackUserActivity);
    } else {
      console.error("User not found");
      throw new Error("User data is not available.");
    }
  }
};

export const fetchUserAverageSessions = async (
  userId: string
): Promise<UserAverageSessions> => {
  try {
    const resp = (await axios.get(`${baseUrl}/user/${userId}/average-sessions`))
      .data;
    return UserAverageSessions.userAverageSessionsFromJson(resp.data);
  } catch (error) {
    console.error("API request failed, using mock data", error);
    const fallBackUserAverageSessions = mockUserData.USER_AVERAGE_SESSIONS.find(
      (user) => user.userId.toString() === userId
    );
    if (fallBackUserAverageSessions) {
      return UserAverageSessions.userAverageSessionsFromJson(
        fallBackUserAverageSessions
      );
    } else {
      console.error("User not found");
      throw new Error("User data is not available.");
    }
  }
};

export const fetchUserPerf = async (
  userId: string
): Promise<UserPerfomance> => {
  try {
    const resp = (await axios.get(`${baseUrl}/user/${userId}/performance`))
      .data;
    return UserPerfomance.userPerfomanceFromJson(resp.data);
  } catch (error) {
    console.error("API request failed, using mock data", error);
    const fallbackUserPerfomance = mockUserData.USER_PERFORMANCE.find(
      (user) => user.userId.toString() === userId
    );
    if (fallbackUserPerfomance) {
      return UserPerfomance.userPerfomanceFromJson(fallbackUserPerfomance);
    } else {
      console.error("User not found");
      throw new Error("User data is not available.");
    }
  }
};

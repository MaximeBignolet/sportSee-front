import axios from "axios";
import {
  User,
  UserActivity,
  UserAverageSessions,
  UserPerfomance,
} from "../models/User";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export const fetchUserData = async (
  userId: string | undefined
): Promise<User> => {
  const resp = (await axios.get(`${baseUrl}/user/${userId}`)).data;
  return User.userFromJson(resp.data);
};

export const fetchUserDataActivityData = async (
  userId: string | undefined
): Promise<UserActivity> => {
  const resp = (await axios.get(`${baseUrl}/user/${userId}/activity`)).data;
  return UserActivity.userActivityFromJson(resp.data);
};

export const fetchUserAverageSessions = async (
  userId: string | undefined
): Promise<UserAverageSessions> => {
  const resp = (await axios.get(`${baseUrl}/user/${userId}/average-sessions`))
    .data;
  return UserAverageSessions.userAverageSessionsFromJson(resp.data);
};

export const fetchUserPerf = async (
  userId: string | undefined
): Promise<UserPerfomance> => {
  const resp = (await axios.get(`${baseUrl}/user/${userId}/performance`)).data;
  return UserPerfomance.userPerfomanceFromJson(resp.data);
};

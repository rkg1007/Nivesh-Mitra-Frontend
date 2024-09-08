import { Credentials, LoginResponse } from "@/types";
import axiosInstance from "../../axios";

export const loginUser = async (
  credentials: Credentials
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post("/api/auth/local", {
      identifier: credentials.email,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUserToken = async () => {
  try {
    const response = await axiosInstance.get("/api/users/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};

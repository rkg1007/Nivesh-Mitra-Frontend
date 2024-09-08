import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, verifyUserToken } from "@/lib";
import { Credentials } from "@/types";

interface UserState {
  user: any;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const data = await loginUser(credentials);
      localStorage.setItem("token", data.jwt);
      return data;
    } catch (error: any) {
      const message = error.response?.data || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "user/verify-token",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return thunkAPI.rejectWithValue("User not logged in");
      }
      const data = await verifyUserToken();
      return {
        jwt: token,
        user: data,
      };
      return data;
    } catch (error: any) {
      const message = error.response?.data || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.jwt;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(verifyToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.jwt;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

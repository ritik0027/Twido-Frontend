import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axios.helper";
import { toast } from "react-toastify";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";

const initialState = {
  loading: false,
  status: false,
  userData: {},
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axiosInstance.post("/users/login", data );
    toast.success(response.data.message + " 🤩");
    return response.data.data.user;
  } catch (error) {
    toast.error(error.response.data.message || parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axiosInstance.post("/users/logout");
    toast.success("Logged out successfully...");
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const getCurrentUser = createAsyncThunk("auth/getCurrentUser", async () => {
  try {
    const response = await axiosInstance.get("/users/current-user");
    return response.data.data;
  } catch (error) {
    console.error("BACKEND_ERROR :: GET CURRENT USER");
    throw error;
  }
});


export const changePassword = createAsyncThunk("auth/changePassword", async (data) => {
  try {
    const response = await axiosInstance.post("/users/change-password", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    throw error;
  }
});


export const updateProfile = createAsyncThunk("auth/updateProfile", async (data) => {
  try {
    const response = await axiosInstance.patch("/users/update-account", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    throw error;
  }
});


export const uploadAvatar = createAsyncThunk("user/avatar", async ({ data }) => {
  try {
    const response = await axiosInstance.patch(`/users/avatar`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const uploadCoverImage = createAsyncThunk("user/coverImage", async ({ data }) => {
  try {
    const response = await axiosInstance.patch(`/users/cover-image`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const watchHistory = createAsyncThunk("user/history", async () => {
  try {
    const response = await axiosInstance.get(`/users/history`);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const clearWatchHistory = createAsyncThunk("user/clearWatchHistory", async () => {
  try {
    const response = await axiosInstance.delete(`/users/history`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const userPlaylists = createAsyncThunk("user/userPlaylists", async (userId) => {
  try {
    const response = await axiosInstance.get(`/playlist/users/${userId}`);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});



const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.status = false;
      state.userData = null;
    });

    //logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.status = false;
      state.userData = null;
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    //getCurrentUser
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.status = true;
    });
    builder.addCase(getCurrentUser.rejected, (state) => {
      state.loading = false;
      state.userData = null;
      state.status = false;
    });

    //change Password
    builder.addCase(changePassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.loading = false;
      //state.status = true;
    });
    builder.addCase(changePassword.rejected, (state) => {
      state.loading = false;
    });

    //update Profile
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      // state.status = true;
    });
    builder.addCase(updateProfile.rejected, (state) => {
      state.loading = false;
    });

    //update avatar
    builder.addCase(uploadAvatar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadAvatar.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(uploadAvatar.rejected, (state) => {
      state.loading = false;
    });

    //update coverImage
    builder.addCase(uploadCoverImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadCoverImage.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(uploadCoverImage.rejected, (state) => {
      state.loading = false;
    });

    //get WatchHistory
    builder.addCase(watchHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(watchHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.userData.watchHistory = action.payload;
    });
    builder.addCase(watchHistory.rejected, (state) => {
      state.loading = false;
    });

    // clear WatchHistory
    builder.addCase(clearWatchHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(clearWatchHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.userData.watchHistory = [];
    });
    builder.addCase(clearWatchHistory.rejected, (state) => {
      state.loading = false;
    });

    //get Playlists
    builder.addCase(userPlaylists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userPlaylists.fulfilled, (state, action) => {
      state.loading = false;
      state.userData.userPlaylists = action.payload;
    });
    builder.addCase(userPlaylists.rejected, (state) => {
      state.loading = false;
    });

  },
});

export default authSlice.reducer;
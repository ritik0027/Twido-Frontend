import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: null,
};

export const getPlaylistById = createAsyncThunk("playlist/getPlaylistById", async (playlistId) => {
  try {
    const response = await axiosInstance.get(`/playlist/${playlistId}`);
    return response.data.data;
  } 
  catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const getUserPlaylists = createAsyncThunk("playlist/getUserPlaylists", async (userId) => {
  try {
    const response = await axiosInstance.get(`/playlist/user/${userId}`);
    return response.data.data;
  } 
  catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const getCurrentPlaylists = createAsyncThunk("playlist/getCurrentPlaylists", async (videoId) => {
    try {
      const response = await axiosInstance.get(`/playlist/user/playlists/${videoId}`);
      return response.data.data;
    } catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
      throw error;
    }
});


export const createPlaylist = createAsyncThunk("playlist/createPlaylist", async ({ data }) => {
  try {
    const response = await axiosInstance.post(`/playlist/create-playlist`, data);
    toast.success(response.data.message);
    return response.data.data;
  } 
  catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});


export const addVideoToPlaylist = createAsyncThunk("playlist/addVideoToPlaylist", async ({ playlistId, videoId }) => {
    try {
      const response = await axiosInstance.patch(`/playlist/add/${videoId}/${playlistId}`);
      toast.success(response.data.message);
      return response.data.data;
    } 
    catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
      throw error;
    }
  }
);


export const removeVideoFromPlaylist = createAsyncThunk("playlist/removeVideoFromPlaylist", async ({ playlistId, videoId }) => {
    try {
      const response = await axiosInstance.patch(`/playlist/remove/${videoId}/${playlistId}`);
      toast.success(response.data.message);
      return response.data.data;
    } 
    catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
      throw error;
    }
  }
);


export const updatePlaylist = createAsyncThunk("playlist/updatePlaylist", async ({ playlistId, data }) => {
    try {
      const response = await axiosInstance.patch(`/playlist/${playlistId}`, data);
      toast.success(response.data.message);
      return response.data.data;
    } catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
      throw error;
    }
  }
);


export const deletePlaylist = createAsyncThunk("playlist/deletePlaylist", async (playlistId) => {
  try {
    const response = await axiosInstance.delete(`/playlist/${playlistId}`);
    toast.success(response.data.message);
    return response.data.data;
  } 
  catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  extraReducers: (builder) => {
    // get Playlist By Id
    builder.addCase(getPlaylistById.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.status = false;
    });
    builder.addCase(getPlaylistById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(getPlaylistById.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // get User Playlists
    builder.addCase(getUserPlaylists.pending, (state) => {
      state.loading = true;
      state.data = null;
    });
    builder.addCase(getUserPlaylists.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(getUserPlaylists.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // create Playlist
    builder.addCase(createPlaylist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPlaylist.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(createPlaylist.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // add Video To Playlist
    builder.addCase(addVideoToPlaylist.pending, (state) => {});
    builder.addCase(addVideoToPlaylist.fulfilled, (state, action) => {});
    builder.addCase(addVideoToPlaylist.rejected, (state) => {});

    // remove Video From Playlist
    builder.addCase(removeVideoFromPlaylist.pending, (state) => {});
    builder.addCase(removeVideoFromPlaylist.fulfilled, (state, action) => {});
    builder.addCase(removeVideoFromPlaylist.rejected, (state) => {});

    // update Playlist
    builder.addCase(updatePlaylist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePlaylist.fulfilled, (state, action) => {
      state.loading = false;
      state.data.name = action.payload.name;
      state.data.description = action.payload.description;
      state.status = true;
    });
    builder.addCase(updatePlaylist.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // delete Playlist
    builder.addCase(deletePlaylist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePlaylist.fulfilled, (state, action) => {
      state.loading = false;
      // state.data = action.payload;
      state.status = true;
    });
    builder.addCase(deletePlaylist.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default playlistSlice.reducer;
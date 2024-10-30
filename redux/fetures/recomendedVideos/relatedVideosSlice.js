const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  loading: false,
  videos: [],
  error: "",
};

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

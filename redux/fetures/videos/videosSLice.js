const { createSlice } = require("@reduxjs/toolkit");
const fetchVideo = require("./thunk/fetchVideo");
const fetchRelatedVideos = require("./thunk/fetchRelatedVidos");

const initialState = {
  loading: false,
  video: {},
  error: "",
};

const videoSLice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.pending, (state, action) => {
      state.loading = true;
      (state.video = {}), (state.error = "");
    });
    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
      state.loading = false;
      state.video = action.payload;
      state.error = "";
    });
  },
});

module.exports = videoSLice.reducer;
module.exports.videoSliceActions = videoSLice.actions;

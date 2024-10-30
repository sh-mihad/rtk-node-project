const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const fetchVideo = require("./fetchVideo");
const relatedVideosPath = require("../../../../utils/splitTags");

const fetchRelatedVideos = createAsyncThunk(
  "video/fetchRelatedVideos",
  async (_, { dispatch, getState }) => {
    const videoResult = await dispatch(fetchVideo());
    if (videoResult?.type?.includes("fulfilled")) {
      const video = videoResult.payload;
      const paths = relatedVideosPath(video?.tags);
      const relatedVideos = await fetch(
        `http://localhost:9000/videos?${paths}`
      );
      const relatedVideosData = await relatedVideos.json();

      return {
        ...video,
        relatedVideos: relatedVideosData,
      };
    }
    throw new Error("Failed to fetch data");
  }
);

module.exports = fetchRelatedVideos;

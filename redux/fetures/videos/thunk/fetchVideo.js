const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const fetchVideo = createAsyncThunk("video/fetch", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const data = await response.json();
  return data;
});

module.exports = fetchVideo;

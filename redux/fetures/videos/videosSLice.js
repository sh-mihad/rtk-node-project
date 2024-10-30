const { createSlice } = require("@reduxjs/toolkit");
const fetchVideo = require("./thunk/fetchVideo");

const initialState ={
    loading:false,
    video:{},
    error:""
}

const videoSLice = createSlice({
  name:"video",
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchVideo.pending,(state,action)=>{
        state.loading = true;
        state.video = {},
        state.error = ""
    })
    builder.addCase(fetchVideo.fulfilled,(state,action)=>{
        state.loading = false;
        state.video = action.payload;
        state.error = ""

    })
    builder.addCase(fetchVideo.rejected,(state,action)=>{
        state.loading = false;
        state.video = {},
        state.error = action.payload.message
    })
  },
 
})

module.exports = videoSLice.reducer;
module.exports.videoSliceActions = videoSLice.actions
const { configureStore } = require("@reduxjs/toolkit");
const videoReducer = require("./fetures/videos/videosSLice");
const { default: logger } = require("redux-logger");

const store = configureStore({
    reducer:{
        video:videoReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


module.exports= store
const fetchRelatedVideos = require("./redux/fetures/videos/thunk/fetchRelatedVidos");
const fetchVideo = require("./redux/fetures/videos/thunk/fetchVideo");
const store = require("./redux/store");

store.subscribe(() => store.getState());

store.dispatch(fetchRelatedVideos());

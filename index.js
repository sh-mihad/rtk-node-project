const fetchVideo = require("./redux/fetures/videos/thunk/fetchVideo")
const store = require("./redux/store")


store.subscribe(()=>console.log(store.getState()))

store.dispatch(fetchVideo())
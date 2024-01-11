import { configureStore } from "@reduxjs/toolkit";
import trackReduser from "./slices/track"
import userReducer from "./slices/user";
import { tracksApi } from "../query/tracks"

export default configureStore({
  reducer: {
    track: trackReduser,
    user: userReducer,
    [tracksApi.reducerPath] : tracksApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware()
  .concat(tracksApi.middleware)
})
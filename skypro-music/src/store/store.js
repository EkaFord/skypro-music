import { configureStore } from "@reduxjs/toolkit";
import trackReduser from "./slices/track"

export default configureStore  ({
  reducer: {
    track: trackReduser,
    
  }
})
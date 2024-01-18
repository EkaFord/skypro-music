import { createSlice } from "@reduxjs/toolkit";
//import { useDispatch, useSelector } from "react-redux";

const initialState = {
  allTracks: [],
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffle: false,
  shuffleAllTracks: [],
  favoriteTracks: [],
  currentPlayList: [],
  currentPage: "",
};

const getCurrentTrackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {

    getAllTracks(state, action) {
      state.allTracks = action.payload;
    },

    getCurrentTrack(state, action) {
      state.currentTrack = action.payload;
      state.indexCurrentTrack = action.payload.id
    },

    getIsPlaying(state, action) {
      state.isPlaying = action.payload
    },

    nextTrack(state, action) {
      const { arreyAllTracks, currentTrack } = action.payload
      if (arreyAllTracks.indexOf(currentTrack) === arreyAllTracks.length - 1) {
        alert('Треки закончились')
        return
      }
      const indexOfNextTrack = arreyAllTracks.indexOf(currentTrack) + 1;
      state.currentTrack = arreyAllTracks[indexOfNextTrack];
      state.isPlaying = true
    },

    prevTrack(state, action) {
      const { arreyAllTracks, currentTrack } = action.payload
      if (arreyAllTracks.indexOf(currentTrack) === 0) {
        alert('Это первый трек')
        return
      }
      const indexOfNextTrack = arreyAllTracks.indexOf(currentTrack) - 1
      state.currentTrack = arreyAllTracks[indexOfNextTrack];
      state.indexCurrentTrack = action.payload.id
    },

    getShuffle(state, action) {
      state.shuffle = action.payload;
      const shuffleArray = new Array(...state.currentPlayList)
      shuffleArray.sort(() => Math.random() - 0.5)
      state.shuffleAllTracks = state.shuffle && shuffleArray
    },

    resetCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
    getFavoriteTracks(state, action) {
      state.favoriteTracks = action.payload;
    },
    getCurrentPlayList(state, action) {
      state.currentPlayList = action.payload;
    },
    getCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  //extraReducers: (builder) => {
    // Add your async thunks here using builder.addCase()
    // Example:
    // builder
    //   .addCase(yourAsyncThunk.fulfilled, (state, action) => {
    //     // Handle the fulfilled state
    //   })
    //   .addCase(yourAsyncThunk.rejected, (state, action) => {
    //     // Handle the rejected state
    //   });
  //}
});


export const {
  getAllTracks,
  getCurrentTrack,
  getIsPlaying,
  nextTrack,
  prevTrack,
  getShuffle,
  resetCurrentTrack,
  getFavoriteTracks,
  getCurrentPlayList,
  getCurrentPage
} = getCurrentTrackSlice.actions;

export default getCurrentTrackSlice.reducer;
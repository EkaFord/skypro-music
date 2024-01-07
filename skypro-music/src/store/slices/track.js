import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffle: false,
  shuffleAllTracks: [],
};


const getCurrentTrackSlace = createSlice({
  name: 'track',
  initialState,
  reducers: {

    getAllTracks(state, action) {
      state.allTracks = action.payload;
    },

    getCurrentTrack(state, action) {
      state.currentTrack = action.payload;
      state.indexCurrentTrack = action.payload.id

      // if (action.payload !== null) {
      //   state.indexCurrentTrack = action.payload.id
      // }
    },

    getIsPlaing(state, action) {
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
      const shuffleArray = new Array(...state.allTracks)
      shuffleArray.sort(() => Math.random() - 0.5)
      state.shuffleAllTracks = state.shuffle && shuffleArray
    },
     
    resetCurrentTrack(state, action) {
      state.currentTrack = action.payload;

    }
  }
});


export const { getAllTracks, getCurrentTrack, getIsPlaing, nextTrack, prevTrack, getShuffle, resetCurrentTrack } = getCurrentTrackSlace.actions;

export default getCurrentTrackSlace.reducer;
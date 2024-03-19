import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTracks: [],
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffle: false,
  shuffleAllTracks: [],
  favoriteTracks: [],
  categoryTracks: [],
  currentPlayList: [],
  currentPage: "",
  authors: [],
  genres: [],
  authorsFilterArr: [],
  genriesFilterArr: [],
  search: "",
  filteredTracks: [],
  filretsActive: false,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    getAllTracks(state, action) {
      if (Array.isArray(action.payload)) {
        state.allTracks = action.payload;
        const allAuthors = action.payload.map(track => track.author);
        const genres = action.payload.map(track => track.genre);
        state.authors = [...new Set(allAuthors)].sort();
        state.genres = [...new Set(genres)].sort();
      } else {
        console.error('Received payload is not an array:', action.payload);
      }
    },
    getCurrentTrack(state, action) {
      state.currentTrack = action.payload;
      state.indexCurrentTrack = action.payload.id;
    },
    getIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    nextTrack(state, action) {
      const { arreyAllTracks, currentTrack } = action.payload;
      if (arreyAllTracks.indexOf(currentTrack) === arreyAllTracks.length - 1) {
        alert('Tracks have ended');
        return;
      }
      const indexOfNextTrack = arreyAllTracks.indexOf(currentTrack) + 1;
      state.currentTrack = arreyAllTracks[indexOfNextTrack];
      state.isPlaying = true;
    },
    prevTrack(state, action) {
      const { arreyAllTracks, currentTrack } = action.payload;
      if (arreyAllTracks.indexOf(currentTrack) === 0) {
        alert('This is the first track');
        return;
      }
      const indexOfPrevTrack = arreyAllTracks.indexOf(currentTrack) - 1;
      state.currentTrack = arreyAllTracks[indexOfPrevTrack];
      state.indexCurrentTrack = action.payload.id;
    },
    getShuffle(state, action) {
      state.shuffle = action.payload;
      const shuffleArray = [...state.currentPlayList];
      shuffleArray.sort(() => Math.random() - 0.5);
      state.shuffleAllTracks = state.shuffle ? shuffleArray : [];
    },
    resetCurrentTrack(state) {
      state.currentTrack = null;
    },
    getFavoriteTracks(state, action) {
      state.favoriteTracks = action.payload;
    },
    getCurrentPlayList(state, action) {
      state.currentPlayList = action.payload;
    },
    getCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    getCategoryTracks(state, action) {
      state.categoryTracks = action.payload;
    },
    getFilterAuthorArr(state, action) {
      
    },
    getFilterOff(state) {
      state.filretsActive = false;
    },
  },
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
  getCurrentPage,
  getCategoryTracks,
  getFilterAuthorArr,
  getFilterOff,
} = trackSlice.actions;

export default trackSlice.reducer;

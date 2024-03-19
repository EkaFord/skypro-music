import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

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
  filteredTracks: [],
  filretsActive: false,
  filterSortDateTracks: [],
  filterSortDate: false,
  filterAuthorTracks: [],
  filterAuthor: false,
  filterGenreTracks: [],
  filterGenre: false,
};

const getCurrentTrackSlace = createSlice({
  name: 'track',
  initialState,
  reducers: {

    getAllTracks(state, action) {
      state.allTracks = action.payload;
      const allTracks = new Array(...state.allTracks);
      const allAuthors = [];
      const denres = [];
      if (allTracks) {
        for (let track of allTracks) {
          allAuthors.push(track.author)
          denres.push(track.genre)
        }
        state.authors = [...new Set(allAuthors)].sort()
        state.genres = [...new Set(denres)].sort()
      }
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
    },

    getCategoryTracks(state, action) {
      state.categoryTracks = action.payload;
    },

    getFilters(state, action) {
      console.log(state.allTracks);
      state.filteredTracks = action.payload
      state.filretsActive = true;
    },

    getAddFiltersAuthore(state, action) {
      
      state.filteredTracks = [...state.filterAuthorTracks, action.payload]
      state.filterAuthorTracks = [...state.filterAuthorTracks, action.payload].sort((function (a, b) {
        return a.id - b.id
      }))
      state.filretsActive = true;
      state.filterAuthor = true;
    },    
    getAddFiltersGenre(state, action) {
      
      state.filteredTracks = [...state.filterGenreTracks, action.payload]
      state.filterGenreTracks = [...state.filterGenreTracks, action.payload].sort((function (a, b) {
        return a.id - b.id
      }))
      state.filretsActive = true;
      state.filretsGenre = true;
    },

    getFiltersOff(state, action) {
      state.filretsActive = false;
      console.log('Фильтры пустые')

    },
    getDaleteFiltersAuthore(state, action) {
      // let newArr = [];

      // newArr = state.filteredTracks.filter((track) => track !== action.payload)
      // console.log(newArr)
      state.filteredTracks = action.payload
      state.filterAuthorTracks = action.payload
    },
    getDaleteFiltersGenre(state, action) {
      // let newArr = [];

      // newArr = state.filteredTracks.filter((track) => track !== action.payload)
      // console.log(newArr)
      state.filteredTracks = action.payload
      state.filterGenreTracks = action.payload
    },
    getSortDateFilter(state, action) {
      // state.filteredTracks = action.payload
      state.filteredTracks = action.payload

      state.filretsActive = true;
      state.filterSortDate = true;
    },
    getSortDateFilterOff(state, action) {
      // state.filteredTracks = action.payload
      state.filteredTracks = action.payload
      state.filretsActive = false;
    },

  },
  // extraReducers: {
  //   [getLikes.fulfilled]: (state, action) => {
  //     console.log(action.payload)
  //   },
  //   [getLikes.rejected]: (state, action) => {
  //     console.log(action.payload)
  //   }
  // }
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
  getFilters,
  getAddFiltersAuthore,
  getFiltersOff,
  getDaleteFiltersAuthore,
  getSortDateFilter,
  getSortDateFilterOff,
  getAddFiltersGenre,
  getDaleteFiltersGenre
} = getCurrentTrackSlace.actions;

export default getCurrentTrackSlace.reducer;
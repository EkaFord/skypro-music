import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getFreshToken } from "../../store/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useGetFavoritesTracksQuery } from "../../query/tracks";

const tokenR = localStorage.getItem('token');


export const getFreshToken = createAsyncThunk(
  'user/getFreshToken',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://skypro-music-api.skyeng.tech/user/token/refresh/', {
        method: "POST",
        body: JSON.stringify({
          refresh: tokenR,
        }),
        headers: {
          "content-type": "application/json",
        },

      });
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error(response.statusText);

        }
        console.log(response)

        throw new Error('Error server');
      }
      const accessToken = await response.json();
      return accessToken

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  id: null,
  userName: "",
  email: "",
  refresh: "",
  access: "",
};

const getUserSlace = createSlice({
  name: 'user',
  initialState,
  reducers: {
    currentUserToken(state, action) {
      const { access, refresh } = action.payload
      state.refresh = refresh;
      state.access = access;
    },
    currentUser(state, action) {
      state.userName = action.payload.user.username;
      state.email = action.payload.user.email;
      state.id = action.payload.user.id;
    }
  },
  extraReducers: {
    [getFreshToken.fulfilled]: (state, action) => {
      state.access = action.payload.access;
      console.log(state.access)
    },
    [getFreshToken.rejected]: (state, action) => {
      console.log(action)
    }
  }
});


export const { currentUserToken, currentUser } = getUserSlace.actions;

export default getUserSlace.reducer;
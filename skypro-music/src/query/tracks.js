import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getFreshToken } from "../store/slices/user"

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://skypro-music-api.skyeng.tech',
  prepareHeaders: (headers, { getState }) => {

    const token = getState().user.access
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})


const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  console.log(result)
  if (result.error && result.error.status === 401) {
    const refreshResult = await api.dispatch(getFreshToken())
    if (refreshResult.data) {
      // Возможно обработка ошибок
      // api.dispatch( getFreshToken())
      // retry the initial query
      //   result = await baseQuery(args, api, extraOptions)
    } else {
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}


export const tracksApi = createApi({

  reducerPath: "tracksApi",
  tagTypes: ["Favorites", 'AllTracks'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAllTracks: build.query({
      query: () => '/catalog/track/all/',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'AllTracks', id })),
            { type: 'AllTracks', id: 'LIST' },
          ]
          : [{ type: 'AllTracks', id: 'LIST' }],
    }),
    getFavoritesTracks: build.query({
      query: () => '/catalog/track/favorite/all/',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Favorites', id })),
            { type: 'Favorites', id: 'LIST' },
          ]
          : [{ type: 'Favorites', id: 'LIST' }],
    }),
    setLike: build.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'AllTracks', id: 'LIST' }
      ]
    }),
    setDisLike: build.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'AllTracks', id: 'LIST' }
      ]
    }),

  }),
})

export const { useGetAllTracksQuery, useGetFavoritesTracksQuery, useSetLikeMutation, useSetDisLikeMutation } = tracksApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
    getRestaurant: builder.query<Restaurante, number>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
})

export const { useGetAllRestaurantsQuery, useGetRestaurantQuery } = api
export default api

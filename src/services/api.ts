import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { pizzaSlice } from '../store/reducers/pizzaSlice.reducer'
import { IPizza } from '../models/IPizza'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface Page {
	page: number
	limit: number
	activeCategory: number
	sortBy: string
	sortOrder: string
}

const baseURL = 'https://626d16545267c14d5677d9c2.mockapi.io'

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
	reducerPath: 'pizzaApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: builder => ({
		getPizzaPage: builder.query<IPizza[], Page>({
			query: ({ limit, page, activeCategory, sortBy, sortOrder }) =>
				`items?page=${page}&limit=${limit}${
					activeCategory !== 0 ? `&category=${activeCategory}` : ''
				}&sortBy=${sortBy}&order=${sortOrder}`,

			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					// `onSuccess` side-effect
					dispatch(pizzaSlice.actions.setPizzaPage(data))
				} catch (err) {
					// `onError` side-effect
					// dispatch(messageCreated('Error fetching post!'))
				}
			},
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPizzaPageQuery } = pizzaApi

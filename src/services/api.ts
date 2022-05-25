import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { pizzaSlice } from '../store/reducers/pizzaSlice.reducer'
import { IPizza } from '../models/IPizza'

interface Page {
	page: number | undefined
	limit: number | undefined
}

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
	reducerPath: 'pizzaApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://626d16545267c14d5677d9c2.mockapi.io' }),

	endpoints: builder => ({
		getPizzaPage: builder.query<IPizza[], Page>({
			//TODO page, limit
			query: ({ limit, page }) => `items?page=${page}&limit=${limit}&sortBy=rating&order=desc`,

			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					// `onSuccess` side-effect
					dispatch(pizzaSlice.actions.clearError(data))
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

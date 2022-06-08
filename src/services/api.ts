import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { pizzaSlice } from '../store/reducers/pizzaSlice.reducer'
import { IPizza } from '../models/IPizza'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface Page {
	page: number
	limit: number
	activeCategory: number
	sortBy: string
	sortOrder: string
	searchPizza: string
}

const baseURL = 'https://626d16545267c14d5677d9c2.mockapi.io'

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
	reducerPath: 'pizzaApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: builder => ({
		getPizzaPage: builder.query<IPizza[], Page>({
			query: ({ limit, page, activeCategory, sortBy, sortOrder, searchPizza }) =>
				`items?page=${page}&limit=${limit}${
					activeCategory !== 0 ? `&category=${activeCategory}` : ''
				}&sortBy=${sortBy}&order=${sortOrder}${searchPizza ? `&search=${searchPizza}` : ''}`,

			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				// console.log('OK')

				try {
					const { data } = await queryFulfilled
					// const newData = data.map(el => {
					// 	return { ...el, cartCount: 1 }
					// })
					// console.log('newData', newData)
					// console.log('data', data)

					// `onSuccess` side-effect
					// dispatch(pizzaSlice.actions.setPizzaPage(data))
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

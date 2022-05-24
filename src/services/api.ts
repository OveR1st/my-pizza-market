import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'
export interface Pizza {
	id: string
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	price: number
	category: number
	rating: number
}

interface Page {
	page: number
	limit: number
}

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
	reducerPath: 'pizzaApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://626d16545267c14d5677d9c2.mockapi.io' }),
	endpoints: builder => ({
		getAllPizza: builder.query<Pizza[], unknown>({
			query: () => `items`,
		}),
		getPizzaPage: builder.query<Pizza[], Page>({
			//TODO page, limit
			query: ({ limit, page }) => `items?page=${page}&limit=${limit}&sortBy=rating&order=desc`,
		}),
		getPizzaInfo: builder.query<Pizza, number>({
			query: number => `${number}`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPizzaInfoQuery, useGetAllPizzaQuery, useGetPizzaPageQuery } = pizzaApi

import { RootState } from './../store'
import { IPizza } from './../../models/IPizza'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzaInfo } from '../actionCreator'

export interface IReposState {
	pizzaPage: IPizza[]
	pizzaQuery: IPizza | null
	isLoading: boolean
	error: string
	filtered: {
		sortBy: string
		sortOrder: string
		activeCategory: number
	}
}

const initialState: IReposState = {
	pizzaPage: [],
	pizzaQuery: null,
	isLoading: false,
	error: '',
	filtered: {
		sortBy: 'rating',
		sortOrder: 'desc',
		activeCategory: 0,
	},
}

export const pizzaSlice = createSlice({
	name: 'Pizza',
	initialState,
	reducers: {
		setPizzaPage(state, { payload }) {
			state.pizzaPage = payload
		},

		setFilteredSort(state, { payload }: PayloadAction<{ sortBy: string; sortOrder: string }>) {
			state.filtered.sortBy = payload.sortBy
			state.filtered.sortOrder = payload.sortOrder
		},

		setFilteredCategory(state, { payload }: PayloadAction<number>) {
			state.filtered.activeCategory = payload
		},
	},
	extraReducers: {
		[fetchPizzaInfo.pending.type]: state => {
			state.isLoading = true
		},
		[fetchPizzaInfo.fulfilled.type]: (state, { payload }: PayloadAction<IPizza>) => {
			state.pizzaQuery = payload
			state.isLoading = false
		},
		[fetchPizzaInfo.rejected.type]: (state, { payload }: PayloadAction<string>) => {
			state.isLoading = false
			state.error = 'Search error'
		},
	},
})
// const pizzaSelector = (state: IReposState): IPizza[] => state.pizza

export const pizzaDataSelector = (state: RootState, number: string): IPizza | undefined => {
	return state.pizzaReducer.pizzaPage.find(pizza => pizza.id === number)
}

export default pizzaSlice.reducer

import { RootState } from './../store'
import { IPizza } from './../../models/IPizza'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzaInfo } from '../actionCreator'

export interface IFilterState {
	sortBy: string
	sortOrder: string
	activeCategory: number
	searchPizza: string
}

const initialState: IFilterState = {
	sortBy: 'rating',
	sortOrder: 'desc',
	activeCategory: 0,
	searchPizza: '',
}

export const filterSlice = createSlice({
	name: 'Filter',
	initialState,
	reducers: {
		setFilteredSort(state, { payload }: PayloadAction<{ sortBy: string; sortOrder: string }>) {
			state.sortBy = payload.sortBy
			state.sortOrder = payload.sortOrder
		},

		setFilteredCategory(state, { payload }: PayloadAction<number>) {
			state.activeCategory = payload
		},

		setFilteredSearch(state, { payload }: PayloadAction<string>) {
			state.searchPizza = payload
		},
	},
})

export default filterSlice.reducer

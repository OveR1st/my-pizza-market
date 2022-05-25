import { RootState } from './../store'
import { IPizza } from './../../models/IPizza'
import { createSlice } from '@reduxjs/toolkit'

export interface IReposState {
	pizza: IPizza[]
}

const initialState: IReposState = {
	pizza: [],
}

export const pizzaSlice = createSlice({
	name: 'Pizza',
	initialState,
	reducers: {
		clearError(state, { payload }) {
			state.pizza = payload
		},
	},
	extraReducers: {
		// [fetchRepo.pending.type]: (state) => {
		//     state.isLoading = true
		// },
		// [fetchRepo.fulfilled.type]: (state, { payload }: PayloadAction<IRepoInfo>) => {
		//     if(state.repos.find((repo) => repo.name === payload.name)) {
		//         state.isLoading = false
		//         state.error = 'repo exists'
		//         return
		//     }
		//     state.isLoading = false
		//     state.error = ''
		//     state.repos = [
		//         ...state.repos,
		//         payload
		//     ]
		// },
		// [fetchRepo.rejected.type]: (state, { payload }: PayloadAction<string>) => {
		//     state.isLoading = false
		//     state.error = 'Search error'
		// }
	},
})
// const pizzaSelector = (state: IReposState): IPizza[] => state.pizza

export const pizzaDataSelector = (state: RootState, number: string): IPizza | undefined => {
	return state.pizzaReducer.pizza.find(pizza => pizza.id === number)
}

export default pizzaSlice.reducer

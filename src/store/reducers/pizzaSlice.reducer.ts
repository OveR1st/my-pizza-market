// import { IRepoInfo } from './../../models/IRepo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { fetchRepo } from "./ActionCreators";

interface IReposState {
	pizza: []
	isLoading: boolean
	error: string
}

const initialState: IReposState = {
	pizza: [],
	isLoading: false,
	error: '',
}

export const pizzaSlice = createSlice({
	name: 'Pizza',
	initialState,
	reducers: {
		clearError(state) {
			state.error = ''
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

export default pizzaSlice.reducer

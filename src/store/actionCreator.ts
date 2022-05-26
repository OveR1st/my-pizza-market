import { createAsyncThunk } from '@reduxjs/toolkit'

const baseURL = 'https://626d16545267c14d5677d9c2.mockapi.io'

export const fetchPizzaInfo = createAsyncThunk(
	'pizza/fetchByNumber',
	async (number: string, thunkAPI) => {
		try {
			// const response = await axios.get<IUserShortInfo[]>(`${api}users/${data}`)
			const response = await fetch(`${baseURL}/items/${number}`)
			let json = await response.json()
			return json
		} catch (e) {
			return thunkAPI.rejectWithValue('Failed to load user')
		}
	}
)

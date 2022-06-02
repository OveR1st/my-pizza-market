import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { pizzaApi } from '../services/api'
import pizzaReducer from './reducers/pizzaSlice.reducer'
import cartReducer from './reducers/cartSlice.reducer'

const rootReducer = combineReducers({
	pizzaReducer,
	cartReducer,
	[pizzaApi.reducerPath]: pizzaApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pizzaApi.middleware),
	})
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

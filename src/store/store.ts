import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import pizzaReducer from './reducers/pizzaSlice.reducer'

const rootReducer = combineReducers({
	pizzaReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware(),
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

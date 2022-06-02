import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza, TPizzaCart } from '../../models/IPizza'

interface ICart {
	items: TPizzaCart[]
	totalPrice: number
}

/**
 * {
		pizzaCount: 1,
		id: '3',
        imageUrl: 'asdasda',
        price: 500,
        types: [0],
        sizes: [0],
        title: 'asdads',
	},
 */

const initialState: ICart = {
	items: [],
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'Cart',
	initialState: initialState,
	reducers: {
		setCart(state, { payload }: PayloadAction<TPizzaCart>) {
			state.items.push(payload)
		},
	},
	// extraReducers:
})

export default cartSlice.reducer

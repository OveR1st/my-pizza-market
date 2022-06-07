import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { IPizza, TPizzaCart } from '../../models/IPizza'

interface ICart {
	items: TPizzaCart[]
	totalPrice: number
	totalItems: number
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
	totalItems: 0,
}

export const cartSlice = createSlice({
	name: 'Cart',
	initialState: initialState,
	reducers: {
		addPizzaToCart(state, { payload }: PayloadAction<TPizzaCart>) {
			const items = current(state).items
			const pizzaInCart = items.find(el => el.title === payload.title)

			if (pizzaInCart) {
				//update pizza
				const pizzaInCartIndex = items.findIndex(el => el.id === pizzaInCart.id)

				const updatePizzaCart = {
					id: pizzaInCart.id,
					imageUrl: pizzaInCart.imageUrl,
					pizzaCount: pizzaInCart.pizzaCount + 1,
					price: pizzaInCart.price + payload.price,
					title: pizzaInCart.title,
					sizes: payload.sizes,
					types: payload.types,
				}

				state.items[pizzaInCartIndex] = updatePizzaCart
				state.totalPrice += payload.price
				state.totalItems += payload.pizzaCount
			} else {
				//add new pizza
				state.items.push(payload)
				state.totalPrice += payload.price
				state.totalItems += payload.pizzaCount
			}
		},

		pizzaInrement(state, { payload }: PayloadAction<string>) {},
	},
	// extraReducers:
})

export default cartSlice.reducer

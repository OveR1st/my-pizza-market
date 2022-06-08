import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
// import { IPizza, TPizzaCart } from '../../models/IPizza'

// interface ICart {
// 	items: TPizzaCart[]
// 	totalPrice: number
// 	totalItems: number
// }

// /**
//  * {
// 		pizzaCount: 1,
// 		id: '3',
//         imageUrl: 'asdasda',
//         price: 500,
//         types: [0],
//         sizes: [0],
//         title: 'asdads',
// 	},
//  */

// const initialState: ICart = {
// 	items: [],
// 	totalPrice: 0,
// 	totalItems: 0,
// }

// export const cartSlice = createSlice({
// 	name: 'Cart',
// 	initialState: initialState,
// 	reducers: {
// 		addPizzaToCart(state, { payload }: PayloadAction<TPizzaCart>) {
// 			const items = current(state).items
// 			const pizzaInCart = items.find(el => el.title === payload.title)

// 			if (pizzaInCart) {
// 				//update pizza
// 				const pizzaInCartIndex = items.findIndex(el => el.id === pizzaInCart.id)

// 				const updatePizzaCart = {
// 					...pizzaInCart,
// 					pizzaCount: pizzaInCart.pizzaCount + 1,
// 					price: pizzaInCart.price + payload.initPrice,
// 				} as TPizzaCart

// 				state.items[pizzaInCartIndex] = updatePizzaCart
// 				state.totalPrice += payload.initPrice
// 				state.totalItems += 1
// 			} else {
// 				//add new pizza
// 				state.items.push(payload)
// 				state.totalPrice += payload.initPrice
// 				state.totalItems += 1
// 			}
// 		},

// 		pizzaIncOrDec(state, { payload }: PayloadAction<{ id: string; isInc: boolean }>) {
// 			const items = current(state).items
// 			const pizzaInCart = items.find(el => el.id === payload.id)

// 			if (pizzaInCart) {
// 				const pizzaInCartIndex = items.findIndex(el => el.id === pizzaInCart.id)
// 				const updatePizzaCart = {
// 					...pizzaInCart,
// 					pizzaCount: payload.isInc ? pizzaInCart.pizzaCount + 1 : pizzaInCart.pizzaCount - 1,
// 					price: payload.isInc
// 						? pizzaInCart.price + pizzaInCart.initPrice
// 						: pizzaInCart.price - pizzaInCart.initPrice,
// 				} as TPizzaCart

// 				state.items[pizzaInCartIndex] = updatePizzaCart

// 				if (payload.isInc) {
// 					state.totalPrice += pizzaInCart.initPrice
// 					state.totalItems += 1
// 				} else {
// 					state.totalPrice -= pizzaInCart.initPrice
// 					state.totalItems -= 1
// 				}
// 			}
// 		},

// 		pizzaDeleteCart(state, { payload }: PayloadAction<string>) {
// 			const items = current(state).items
// 			const pizzaInCartIndex = items.findIndex(el => el.id === payload)

// 			state.totalItems -= state.items[pizzaInCartIndex].pizzaCount || state.totalItems
// 			state.totalPrice -= state.items[pizzaInCartIndex].price || state.totalPrice

// 			state.items.splice(pizzaInCartIndex, 1)
// 		},

// 		clearCart(state, { payload }: PayloadAction<undefined>) {
// 			return initialState
// 		},
// 	},
// 	// extraReducers:
// })

// export default cartSlice.reducer

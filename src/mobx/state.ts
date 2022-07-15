import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { IPizza } from '../models/IPizza'

export interface IDoubler {
	value: number
	readonly double: number
	increment: () => void
}

export interface IReposState {
	pizzaPage: IPizza[]
	pizzaQuery: IPizza | null
	isLoading: boolean
	error: string
	filtered: {
		sortBy: string
		sortOrder: string
		activeCategory: number
		searchPizza: string
	}
}

// const createStore = () => {
// 	return makeAutoObservable(
// 		this,
// 		{
// 			value: 1,
// 			get double() {
// 				return this.value * 2
// 			},
// 			increment() {
// 				console.log('this', this)

// 				this.value++
// 			},
// 		},
// 		{ autoBind: true }
// 	) as IDoubler
// }

const baseURL = 'https://626d16545267c14d5677d9c2.mockapi.io/'

class CreatePizzaStore implements IReposState {
	value = 0
	pizzaPage = []
	pizzaQuery = null
	isLoading = false
	error = ''
	filtered = {
		sortBy: 'rating',
		sortOrder: 'desc',
		activeCategory: 0,
		searchPizza: '',
	}

	constructor() {
		// console.log('Call constructor')

		makeAutoObservable(this, {}, { autoBind: true })
		// makeObservable(this, {
		//   counter: observable,
		//   increment: action.bound,
		//   decrement: action.bound,
		// });
	}

	get double() {
		return this.value * 2
	}

	getPizzaApi() {
		this.isLoading = true
		const data = axios(`${baseURL}items?page=1&limit=4`).then(res => {
			this.pizzaPage = res.data
			this.isLoading = false
		})
	}

	setActiveCategory(catId: number) {
		this.filtered.activeCategory = catId
	}

	increment() {
		this.value++
	}
}

export default CreatePizzaStore

// export function createDoubler() {
// 	return {
// 		value: 0,
// 		increment() {
// 			console.log('ok')

// 			this.value++
// 		},

// 		get double() {
// 			return this.value * 2
// 		},
// 	} as IDoubler
// }

// export default createStore

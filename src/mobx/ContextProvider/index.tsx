import React, { ChildContextProvider } from 'react'

import CreatePizzaStore from '../state'

import { useLocalObservable } from 'mobx-react'

// const MobxContext = React.createContext<IDoubler | null>(null)

const store = {
	pizzaStore: new CreatePizzaStore(),
}
// console.log('Create store')

export const StoreContext = React.createContext(store)
export const useStore = () => {
	return React.useContext<typeof store>(StoreContext)
}

export default store

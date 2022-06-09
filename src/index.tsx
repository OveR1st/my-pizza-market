import React from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import { setupStore } from './store/store'

import App from './App'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store, { StoreContext } from './mobx/ContextProvider/index'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
// const store = setupStore()

root.render(
	<BrowserRouter>
		<StoreContext.Provider value={store}>
			<App />
		</StoreContext.Provider>
	</BrowserRouter>
)

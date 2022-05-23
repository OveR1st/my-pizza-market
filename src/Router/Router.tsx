import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Path } from './config'

const RoutesContainer: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={Path.HOMEPAGE} element={<div>HomePage</div>} />
				<Route path={Path.PIZZAPAGE} element={<div>PizzaPage</div>} />
				<Route path={Path.CART} element={<div>CART</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesContainer

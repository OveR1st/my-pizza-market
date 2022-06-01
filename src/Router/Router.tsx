import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderContainer from '../components/header.container'
import CartPage from '../pages/Cart'

import HomePage from '../pages/HomePage'
import NoMatch from '../pages/NoMatch'
import PizzaInfoPage from '../pages/PizzaInfoPage'

import { Path } from './config'

const RoutesContainer: React.FC = () => {
	return (
		<Routes>
			<Route path={Path.HOMEPAGE} element={<HomePage />} />
			<Route path={Path.PIZZAINFOPAGE} element={<PizzaInfoPage />} />
			<Route path={Path.CART} element={<CartPage />} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	)
}

export default RoutesContainer

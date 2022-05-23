import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderContainer from '../components/header.container'

import HomePage from '../pages/HomePage'
import NoMatch from '../pages/NoMatch'

import { Path } from './config'

const RoutesContainer: React.FC = () => {
	return (
		<Routes>
			<Route path={Path.HOMEPAGE} element={<HomePage />} />
			<Route path={Path.PIZZAINFOPAGE} element={<div>PizzaInfoPage</div>} />
			<Route path={Path.CART} element={<div>CART</div>} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	)
}

export default RoutesContainer

import React from 'react'

import s from './styles.module.scss'

import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import { ReactComponent as SearchSVG } from '../../assets/search.svg'
import { ReactComponent as CartSVG } from '../../assets/cartWhite.svg'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import debounce from 'lodash.debounce'
import { pizzaSlice } from '../../store/reducers/pizzaSlice.reducer'

const HeaderContainer: React.FC = () => {
	const param = useLocation()
	const dispatch = useAppDispatch()
	const isCartPage = param.pathname === '/cart'

	const { setFilteredSearch } = pizzaSlice.actions
	const { totalPrice, totalItems } = useAppSelector(state => state.cartReducer)
	const searchHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilteredSearch(e.target.value))
	}, 1000)

	console.log('RENDER HEADER WITH SEARCH')

	return (
		<header className={s.wrapper}>
			<div className={s.container}>
				<Link to="/">
					<div className={s.logoContainer}>
						<div>
							<LogoSVG />
						</div>
						<div className={s.logoContainer__titleWrapp}>
							<h1>REACT PIZZA</h1>
							<span>самая вкусная пицца во вселенной</span>
						</div>
					</div>
				</Link>
				{!isCartPage && (
					<div className={s.searchContainer}>
						<SearchSVG />
						<input onChange={e => searchHandler(e)} type="text" placeholder="Поиск пиццы..." />
					</div>
				)}
				{!isCartPage && (
					<div className={s.cartContainer}>
						<Link to="/cart">
							<span>{totalPrice} $</span>
							<div className={s.delimiter}></div>
							<div className={s.cartLength}>
								<CartSVG /> {totalItems}
							</div>
						</Link>
					</div>
				)}
			</div>
		</header>
	)
}

export default HeaderContainer

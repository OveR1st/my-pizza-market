import React from 'react'

import s from './styles.module.scss'

import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import { ReactComponent as SearchSVG } from '../../assets/search.svg'
import { ReactComponent as CartSVG } from '../../assets/cartWhite.svg'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const HeaderContainer: React.FC = () => {
	const param = useLocation()
	const isCartPage = param.pathname === '/cart'

	const { totalPrice, totalItems } = useAppSelector(state => state.cartReducer)

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
						<input type="text" placeholder="Поиск пиццы..." />
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

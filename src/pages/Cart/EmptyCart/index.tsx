import React from 'react'
import { Link } from 'react-router-dom'

import emptyImg from '../../../assets/empty-cart.png'
import s from './styles.module.scss'

const EmptyCart: React.FC = () => {
	return (
		<>
			<h2>
				Корзина пустая <span>😕</span>
			</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={emptyImg} alt="Empty cart" />
			<Link to={'/'} className={s.backBtn}>
				<span>Вернуться назад</span>
			</Link>
		</>
	)
}

export default EmptyCart

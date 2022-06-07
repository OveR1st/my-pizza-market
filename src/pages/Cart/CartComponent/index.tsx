import React from 'react'

import { ReactComponent as CartBlackSVG } from '../../../assets/cartBlack.svg'
import { ReactComponent as GarbageSVG } from '../../../assets/garbage.svg'
import { ReactComponent as BackArrowSVG } from '../../../assets/backArrow.svg'

import { Link } from 'react-router-dom'
import { cartSlice } from '../../../store/reducers/cartSlice.reducer'
import { useAppSelector } from '../../../store/hooks'

import CartItem from './CartItem'

import s from './styles.module.scss'

const CartComponent: React.FC = () => {
	/**
	 * //TODO
	 * 1. Перенести все кнопки в миксины, убрать копирование scss кода
	 */

	const pizzaItems = useAppSelector(state => state.cartReducer.items)

	return (
		<>
			<div className={s.cartTop}>
				<h2 className="content__title">
					<CartBlackSVG />
					Корзина
				</h2>
				<div className={s.cartTop__clear}>
					<GarbageSVG />
					<span>Очистить корзину</span>
				</div>
			</div>
			<div className={s.cartItems}>
				{pizzaItems.map(pizza => {
					return <CartItem key={pizza.id} {...pizza} />
				})}
			</div>
			<div className={s.cartBottom}>
				<div className={s.cartBottom__details}>
					<span>
						{' '}
						Всего пицц: <b>1 шт.</b>{' '}
					</span>
					<span>
						{' '}
						Сумма заказа: <b>395 ₽</b>{' '}
					</span>
				</div>
				<div className={s.cartBottom__btns}>
					<Link to={'/'} className={s.backBtn}>
						<BackArrowSVG />
						<span>Вернуться назад</span>
					</Link>
					<div className={s.payBtn}>
						<span>Оплатить сейчас</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartComponent

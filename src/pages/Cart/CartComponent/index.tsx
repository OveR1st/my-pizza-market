import React from 'react'

import { ReactComponent as CartBlackSVG } from '../../../assets/cartBlack.svg'
import { ReactComponent as GarbageSVG } from '../../../assets/garbage.svg'
import { ReactComponent as BackArrowSVG } from '../../../assets/backArrow.svg'

import { Link } from 'react-router-dom'
import { cartSlice } from '../../../store/reducers/cartSlice.reducer'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

import CartItem from './CartItem'

import s from './styles.module.scss'

const CartComponent: React.FC = () => {
	/**
	 * //TODO
	 * 1. Перенести все кнопки в миксины, убрать копирование scss кода
	 */
	const dispatch = useAppDispatch()
	const { pizzaIncOrDec, pizzaDeleteCart, clearCart } = cartSlice.actions
	const { items, totalPrice, totalItems } = useAppSelector(state => state.cartReducer)

	const pizzaIncOrDecHandler = React.useCallback((id: string, isInc: boolean) => {
		dispatch(pizzaIncOrDec({ id, isInc }))
	}, [])

	const pizzaDeleteCartHandler = React.useCallback((id: string) => {
		dispatch(pizzaDeleteCart(id))
	}, [])

	const clearCartHandler = () => {
		dispatch(clearCart())
	}

	return (
		<>
			<div className={s.cartTop}>
				<h2 className="content__title">
					<CartBlackSVG />
					Корзина
				</h2>
				<div onClick={() => clearCartHandler()} className={s.cartTop__clear}>
					<GarbageSVG />
					<span>Очистить корзину</span>
				</div>
			</div>
			<div className={s.cartItems}>
				{items.map(pizza => {
					return (
						<CartItem
							key={pizza.id}
							pizza={pizza}
							pizzaIncOrDecHandler={pizzaIncOrDecHandler}
							pizzaDeleteCartHandler={pizzaDeleteCartHandler}
						/>
					)
				})}
			</div>
			<div className={s.cartBottom}>
				<div className={s.cartBottom__details}>
					<span>
						{' '}
						Всего пицц: <b>{totalItems} шт.</b>{' '}
					</span>
					<span>
						{' '}
						Сумма заказа: <b>{totalPrice} ₽</b>{' '}
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

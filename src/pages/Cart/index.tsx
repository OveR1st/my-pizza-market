import React from 'react'
import { useAppSelector } from '../../store/hooks'
import CartComponent from './CartComponent'
import EmptyCart from './EmptyCart'

import s from './styles.module.scss'

const CartPage: React.FC = () => {
	const { totalItems } = useAppSelector(state => state.cartReducer)
	return (
		<div className={s.cartWrapper}>
			<div className={s.cartContainer}>
				{totalItems !== 0 ? <CartComponent /> : <EmptyCart />}
				{/* <CartComponent /> */}
				{/* <EmptyCart /> */}
			</div>
		</div>
	)
}

export default CartPage

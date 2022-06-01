import React from 'react'
import CartComponent from './CartComponent'
import EmptyCart from './EmptyCart'

import s from './styles.module.scss'

const CartPage: React.FC = () => {
	return (
		<div className={s.cartWrapper}>
			<div className={s.cartContainer}>
				{/* <EmptyCart /> */}
				<CartComponent />
			</div>
		</div>
	)
}

export default CartPage

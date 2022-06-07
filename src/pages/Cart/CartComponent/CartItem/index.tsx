import React from 'react'

import { ReactComponent as MinusPlusClose } from '../../../../assets/minusPlusClose.svg'
import { TPizzaCart } from '../../../../models/IPizza'

import s from './styles.module.scss'

interface IProps {
	pizza: TPizzaCart
	pizzaIncrementHandler: (id: string) => void
}

const CartItem: React.FC<IProps> = ({
	pizza: { id, imageUrl, pizzaCount, price, sizes, title, types },
	pizzaIncrementHandler,
}) => {
	return (
		<div className={s.cartItem}>
			<div className={s.cartItem__img}>
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			</div>
			<div className={s.cartItem__info}>
				<h3>{title}</h3>
				<p>тонкое, 26 см.</p>
			</div>
			<div className={s.cartItem__count}>
				<button disabled className={s.minus}>
					<MinusPlusClose />
				</button>
				<b>{pizzaCount}</b>
				<button onClick={() => pizzaIncrementHandler(id)} className={s.plus}>
					<MinusPlusClose />
				</button>
			</div>
			<div className={s.cartItem__price}>
				<b>{price} ₽</b>
			</div>
			<div className={s.cartItem__remove}>
				<div className={s.removeBtn}>
					<MinusPlusClose />
				</div>
			</div>
		</div>
	)
}

export default CartItem

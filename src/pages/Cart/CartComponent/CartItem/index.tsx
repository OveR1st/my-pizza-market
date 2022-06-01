import React from 'react'

import { ReactComponent as MinusPlusClose } from '../../../../assets/minusPlusClose.svg'

import s from './styles.module.scss'

const CartItem: React.FC = () => {
	return (
		<div className={s.cartItem}>
			<div className={s.cartItem__img}>
				<img
					className="pizza-block__image"
					src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg"
					alt="Pizza"
				/>
			</div>
			<div className={s.cartItem__info}>
				<h3>Четыре сезона</h3>
				<p>тонкое, 26 см.</p>
			</div>
			<div className={s.cartItem__count}>
				<button disabled className={s.minus}>
					<MinusPlusClose />
				</button>
				<b>1</b>
				<button className={s.plus}>
					<MinusPlusClose />
				</button>
			</div>
			<div className={s.cartItem__price}>
				<b>395 ₽</b>
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

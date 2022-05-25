import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddSVG } from '../../../assets/addItem.svg'
import s from './styles.module.scss'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface IProps {
	pizzaImg: string
	pizzaPrice: number
	pizzaTitle: string
	isLoading: boolean
	id: string
}

const PizzaItem: React.FC<IProps> = ({ id, pizzaImg, pizzaPrice, pizzaTitle, isLoading }) => {
	return (
		<div className={s.pizzaItem}>
			<Link to={`/pizza/${id}`}>
				{isLoading ? <Skeleton circle height="59%" /> : <img src={pizzaImg} alt="Pizza" />}
				<h4>{isLoading ? <Skeleton /> : pizzaTitle}</h4>
			</Link>
			<div className={s.pizzaItem__selector}>
				{isLoading ? (
					<Skeleton height={'4.75rem'} />
				) : (
					<>
						<ul>
							<li className={s.active}>тонкое</li>
							<li className="">традиционное</li>
						</ul>
						<ul>
							<li className={s.active}>26 см.</li>
							<li className="">30 см.</li>
							<li className="">40 см.</li>
						</ul>
					</>
				)}
			</div>
			<div className={s.pizzaItem__priceBox}>
				<div className={s.price}>
					{isLoading ? (
						<Skeleton height={'1.6875rem'} width={'7.19725rem'} count={1} />
					) : (
						`от ${pizzaPrice} грн`
					)}
				</div>
				{isLoading ? (
					<Skeleton height={'2.75rem'} width={'8.675625rem'} count={1} borderRadius={'30px'} />
				) : (
					<button className={s.addBtn}>
						<AddSVG />
						<span>Добавить</span>
						<i>1</i>
					</button>
				)}
			</div>
		</div>
	)
}

export default PizzaItem

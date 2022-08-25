import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddSVG } from '../../../assets/addItem.svg'
import s from './styles.module.scss'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { cartSlice } from '../../../store/reducers/cartSlice.reducer'

interface IProps {
	imageUrl: string
	price: number
	title: string
	isLoading: boolean
	id: string
	sizes: number[]
	types: number[]
}

const PizzaItem: React.FC<IProps> = ({ id, imageUrl, price, title, isLoading, sizes, types }) => {
	const [pizzaType, setPizzaType] = React.useState(0)
	const [pizzaSize, setPizzaSize] = React.useState(0)

	const dispatch = useAppDispatch()

	const { addPizzaToCart } = cartSlice.actions

	const pizzaAddHandler = () => {
		dispatch(
			addPizzaToCart({
				id,
				imageUrl,
				pizzaCount: 1,
				price,
				sizes: [pizzaSize],
				title,
				types: [pizzaType],
				initPrice: price,
			})
		)
	}

	const typeName = ['тонкое', 'традиционное']

	const pizzaCount = useAppSelector(
		state => state.cartReducer.items.find(el => el.id === id)?.pizzaCount
	)

	return (
		<div className={s.pizzaItem}>
			<Link to={`/pizza/${id}`}>
				{isLoading ? <Skeleton circle height="59%" /> : <img src={imageUrl} alt="Pizza" />}
				<h4>{isLoading ? <Skeleton /> : title}</h4>
			</Link>
			<div className={s.pizzaItem__selector}>
				{isLoading ? (
					<Skeleton height={'4.75rem'} />
				) : (
					<>
						<ul>
							{types.map((typeId, i) => {
								return (
									<li
										key={typeId}
										onClick={() => setPizzaType(typeId)}
										className={clsx(pizzaType === i && s.active)}
									>
										{typeName[typeId]}
									</li>
								)
							})}
						</ul>
						<ul>
							{sizes.map((num, i) => {
								return (
									<li
										key={i}
										onClick={() => setPizzaSize(i)}
										className={clsx(pizzaSize === i && s.active)}
									>
										{num} см.
									</li>
								)
							})}
						</ul>
					</>
				)}
			</div>
			<div className={s.pizzaItem__priceBox}>
				<div className={s.price}>
					{isLoading ? (
						<Skeleton height={'1.6875rem'} width={'7.19725rem'} count={1} />
					) : (
						`от ${price} грн`
					)}
				</div>
				{isLoading ? (
					<Skeleton
						height={'2.75rem'}
						width={'8.675625rem'}
						count={1}
						borderRadius={'30px'}
					/>
				) : (
					<button onClick={pizzaAddHandler} className={s.addBtn}>
						<AddSVG />
						<span>Добавить</span>
						{pizzaCount && <i>{pizzaCount}</i>}
					</button>
				)}
			</div>
		</div>
	)
}

export default PizzaItem

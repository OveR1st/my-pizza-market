import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffectOnce } from '../../hooks/useEffectOnce'
import { fetchPizzaInfo } from '../../store/actionCreator'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { pizzaDataSelector, pizzaSlice } from '../../store/reducers/pizzaSlice.reducer'

import s from './styles.module.scss'

const PizzaInfoPage: React.FC = () => {
	let { number } = useParams()
	const dispatch = useAppDispatch()
	const pizzaInfo = useAppSelector(state => pizzaDataSelector(state, String(number)))

	// console.log('pizzaInfo', pizzaInfo)

	useEffectOnce(() => {
		// console.log('CALL USEFFECT')

		dispatch(fetchPizzaInfo(String(number)))
	})

	const { pizza, isLoading } = useAppSelector(state => state.pizzaReducer)
	// pizzaSlice

	console.log('isLoading', isLoading)
	console.log('pizza', pizza)

	return (
		<div className={s.wrapper}>
			<div className={s.InfoPageContainer}>
				<div className={s.imgContainer}>
					<img src={pizzaInfo?.imageUrl} alt="" />
				</div>
				<div className={s.title}>
					<h2>{pizzaInfo?.title}</h2>
				</div>
				<div className={s.price}>
					<span>{pizzaInfo?.price} грн</span>
				</div>
				<Link to={'/'}>
					<div className={s.backBtn}>
						<span>Назад</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default PizzaInfoPage

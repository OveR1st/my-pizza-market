import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchPizzaInfo } from '../../store/actionCreator'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { pizzaDataSelector, pizzaSlice } from '../../store/reducers/pizzaSlice.reducer'
import { useNavigate } from 'react-router-dom'

import s from './styles.module.scss'
import Skeleton from 'react-loading-skeleton'

const PizzaInfoPage: React.FC = () => {
	let { number } = useParams()
	const dispatch = useAppDispatch()
	let navigate = useNavigate()

	const pizzaInfo = useAppSelector(state => pizzaDataSelector(state, String(number)))
	const { pizzaQuery, isLoading } = useAppSelector(state => state.pizzaReducer)

	// console.log('pizzaInfo', pizzaInfo)

	React.useEffect(() => {
		if (isNaN(Number(number))) {
			//bad query path
			navigate('error')
		}
		if (!pizzaInfo) {
			dispatch(fetchPizzaInfo(String(number)))
		}
	}, [])

	// pizzaSlice

	console.log('isLoading', isLoading)

	return (
		<div className={s.wrapper}>
			<div className={s.InfoPageContainer}>
				<div className={s.InfoPageContainer__pizzaBlock}>
					<div className={s.imgContainer}>
						{isLoading ? (
							<Skeleton circle height="80%" />
						) : (
							<img src={pizzaInfo?.imageUrl || pizzaQuery?.imageUrl} alt="" />
						)}
					</div>
					<div className={s.title}>
						<h2>{isLoading ? <Skeleton /> : pizzaInfo?.title || pizzaQuery?.title}</h2>
					</div>
					<div className={s.price}>
						{isLoading ? (
							<Skeleton count={1} />
						) : (
							<span>{pizzaInfo?.price || pizzaQuery?.price} грн</span>
						)}
					</div>
					<Link to={'/'}>
						<div className={s.backBtn}>
							<span>Назад</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PizzaInfoPage

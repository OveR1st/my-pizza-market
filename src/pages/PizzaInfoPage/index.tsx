import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { pizzaDataSelector } from '../../store/reducers/pizzaSlice.reducer'

import s from './styles.module.scss'

const PizzaInfoPage: React.FC = () => {
	let { number } = useParams()

	const pizzaInfo = useAppSelector(state => pizzaDataSelector(state, String(number)))

	return (
		<div className={s.wrapper}>
			<div></div>
		</div>
	)
}

export default PizzaInfoPage

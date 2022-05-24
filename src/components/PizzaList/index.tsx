import React from 'react'
import PizzaItem from './PizzaItem'

import s from './styles.module.scss'

const PizzaList: React.FC = () => {
	return (
		<div className={s.pizzaWrapper}>
			<PizzaItem />
			<PizzaItem />
			<PizzaItem />
			<PizzaItem />
			<PizzaItem />
		</div>
	)
}

export default PizzaList

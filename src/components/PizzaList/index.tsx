import React from 'react'
import { Pizza } from '../../services/api'
import PizzaItem from './PizzaItem'

import s from './styles.module.scss'

interface IProps {
	pizzaData: Pizza[] | undefined
	isLoading: boolean
}

const PizzaList: React.FC<IProps> = ({ pizzaData, isLoading }) => {
	const [isLazyLoading, setIsLazyLoading] = React.useState(isLoading)

	React.useEffect(() => {
		if (!isLoading) {
			setTimeout(() => setIsLazyLoading(false), 1000)
		}
	}, [isLoading])

	return (
		<div className={s.pizzaWrapper}>
			{pizzaData?.map(pizza => {
				return (
					<PizzaItem
						key={pizza.id}
						pizzaImg={pizza.imageUrl}
						pizzaPrice={pizza.price}
						pizzaTitle={pizza.title}
						isLoading={isLazyLoading}
					/>
				)
			})}
		</div>
	)
}

export default PizzaList

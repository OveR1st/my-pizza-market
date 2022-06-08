import React from 'react'
import { IPizza } from '../../models/IPizza'
import PizzaItem from './PizzaItem'

import s from './styles.module.scss'

interface IProps {
	pizzaData: IPizza[] | undefined
	isLoading?: boolean
}

const PizzaList: React.FC<IProps> = ({ pizzaData, isLoading }) => {
	// const [isLazyLoading, setIsLazyLoading] = React.useState(isLoading)

	// React.useEffect(() => {
	// 	if (!isLoading) {
	// 		setTimeout(() => setIsLazyLoading(false), 1000)
	// 	}
	// }, [isLoading])

	return (
		<div className={s.pizzaWrapper}>
			{pizzaData?.map(pizza => {
				return <PizzaItem key={pizza.id} {...pizza} />
			})}
		</div>
	)
}

export default PizzaList

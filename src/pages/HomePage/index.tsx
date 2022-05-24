import React from 'react'

import Categories from '../../components/Categories'
import PizzaList from '../../components/PizzaList'
import Sort from '../../components/Sort'

import { useGetPizzaPageQuery } from '../../services/api'

import s from './styles.module.scss'

const HomePage: React.FC = () => {
	const { data, error, isLoading } = useGetPizzaPageQuery({ page: 1, limit: 4 })

	return (
		<div className={s.container}>
			<div className={s.container__top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={s.title}>Все пиццы</h2>
			<PizzaList pizzaData={data} isLoading={isLoading} />
		</div>
	)
}

export default HomePage

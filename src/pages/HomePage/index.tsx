import React from 'react'

import Categories from '../../components/Categories'
import Pagination from '../../components/Pagination'
import PizzaList from '../../components/PizzaList'
import Sort from '../../components/Sort'

import { useGetPizzaPageQuery } from '../../services/api'

import s from './styles.module.scss'

const HomePage: React.FC = () => {
	const [currentPage, setPage] = React.useState(1)
	const { data, error, isLoading } = useGetPizzaPageQuery({ page: currentPage, limit: 4 })

	const selectedPageHandler = (page: number) => {
		setPage(page)
	}

	return (
		<div className={s.container}>
			<div className={s.container__top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={s.title}>Все пиццы</h2>
			<PizzaList pizzaData={data} isLoading={isLoading} />
			<Pagination selectedPageHandler={selectedPageHandler} currentPage={currentPage} />
		</div>
	)
}

export default HomePage

import React from 'react'

import Categories from '../../components/Categories'
import Pagination from '../../components/Pagination'
import PizzaList from '../../components/PizzaList'
import Sort from '../../components/Sort'

import { useGetPizzaPageQuery } from '../../services/api'

import s from './styles.module.scss'

const HomePage: React.FC = () => {
	const [currentPage, setPage] = React.useState(1)

	//TODO перенести в Redux категории фильтрации и сортировку
	const [category, setCategory] = React.useState<number>(0)
	const [filtered, setFiltered] = React.useState({ sortBy: 'rating', sortOrder: 'desc' })

	const { data, error, isLoading } = useGetPizzaPageQuery({
		page: currentPage,
		limit: 4,
		category: category,
		sortBy: filtered.sortBy,
		sortOrder: filtered.sortOrder,
	})

	const selectedPageHandler = (page: number) => {
		setPage(page)
	}

	const selectedSort = (sortBy: string, sortOrder: string) => {
		setFiltered({ sortBy, sortOrder })
	}

	const selectedCategory = (catId: number) => {
		setCategory(catId)
	}

	return (
		<div className={s.container}>
			<div className={s.container__top}>
				<Categories selectedCategory={selectedCategory} />
				<Sort selectedSort={selectedSort} />
			</div>
			<h2 className={s.title}>Все пиццы</h2>
			<PizzaList pizzaData={data} isLoading={isLoading} />
			<Pagination selectedPageHandler={selectedPageHandler} currentPage={currentPage} />
		</div>
	)
}

export default HomePage

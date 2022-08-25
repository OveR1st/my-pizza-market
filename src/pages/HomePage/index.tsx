import React from 'react'

import Categories from '../../components/Categories'
import Pagination from '../../components/Pagination'
import PizzaList from '../../components/PizzaList'
import Sort from '../../components/Sort'

import { useGetPizzaPageQuery } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { filterSlice } from '../../store/reducers/filterSlice.reducer'

import s from './styles.module.scss'

const HomePage: React.FC = () => {
	const [currentPage, setPage] = React.useState(1)

	const dispatch = useAppDispatch()

	const { setFilteredSort, setFilteredCategory } = filterSlice.actions

	const { activeCategory, sortBy, sortOrder, searchPizza } = useAppSelector(
		state => state.filterReducer
	)

	const { data, error, isLoading } = useGetPizzaPageQuery({
		page: currentPage,
		limit: currentPage === 3 ? 2 : 4,
		activeCategory,
		sortBy,
		sortOrder,
		searchPizza,
	})

	const selectedPageHandler = (page: number) => {
		setPage(page)
	}

	const selectedSort = React.useCallback((sortBy: string, sortOrder: string) => {
		dispatch(setFilteredSort({ sortBy, sortOrder }))
	}, [])

	const selectedCategory = React.useCallback((catId: number) => {
		dispatch(setFilteredCategory(catId))
	}, [])

	return (
		<div className={s.container}>
			<div className={s.container__top}>
				<Categories selectedCategory={selectedCategory} activeCategory={activeCategory} />
				<Sort selectedSort={selectedSort} sortBy={sortBy} sortOrder={sortOrder} />
			</div>
			<h2 className={s.title}>Все пиццы</h2>
			<PizzaList pizzaData={data} isLoading={isLoading} />
			<Pagination selectedPageHandler={selectedPageHandler} currentPage={currentPage} />
		</div>
	)
}

export default HomePage

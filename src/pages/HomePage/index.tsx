import React from 'react'

import Categories from '../../components/Categories'
import Sort from '../../components/Sort'

import s from './styles.module.scss'

const HomePage: React.FC = () => {
	return (
		<div className={s.container}>
			<div className={s.container__top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={s.title}>Все пиццы</h2>
		</div>
	)
}

export default HomePage

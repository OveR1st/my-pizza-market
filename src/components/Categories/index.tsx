import clsx from 'clsx'
import React from 'react'

import s from './styles.module.scss'

interface IProps {
	selectedCategory: (catId: number) => void
}

const Categories: React.FC<IProps> = ({ selectedCategory }) => {
	const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const [activeCat, setActiveCat] = React.useState(0)

	const selectedCategoryHandler = (cat: string, i: number) => {
		setActiveCat(i)
		selectedCategory(i)
	}

	return (
		<div className={s.categories}>
			<ul>
				{category.map((cat, i) => {
					return (
						<li
							key={i}
							onClick={() => selectedCategoryHandler(cat, i)}
							className={clsx(activeCat === i && s.active)}
						>
							{cat}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categories

import clsx from 'clsx'
import React from 'react'

import s from './styles.module.scss'

interface IProps {
	selectedCategory: (catId: number) => void
	activeCategory: number
}

const Categories: React.FC<IProps> = ({ selectedCategory, activeCategory }) => {
	const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const selectedCategoryHandler = (cat: string, i: number) => {
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
							className={clsx(activeCategory === i && s.active)}
						>
							{cat}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default React.memo(Categories)

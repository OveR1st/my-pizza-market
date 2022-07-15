import clsx from 'clsx'
import React from 'react'

import s from './styles.module.scss'

interface IProps {
	setActiveCategory: (catId: number) => void
	activeCategory: number
}

const Categories: React.FC<IProps> = React.memo(({ setActiveCategory, activeCategory }) => {
	const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
	console.log('render Categories', activeCategory)

	const selectedCategoryHandler = (i: number) => {
		setActiveCategory(i)
	}

	return (
		<div className={s.categories}>
			<ul>
				{category.map((cat, i) => {
					return (
						<li
							key={i}
							onClick={() => selectedCategoryHandler(i)}
							className={clsx(activeCategory === i && s.active)}
						>
							{cat}
						</li>
					)
				})}
			</ul>
		</div>
	)
})

export default Categories

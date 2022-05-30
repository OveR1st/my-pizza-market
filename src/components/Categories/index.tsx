import clsx from 'clsx'
import React from 'react'

import s from './styles.module.scss'

const Categories: React.FC = () => {
	const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const [activeCat, setActiveCat] = React.useState(0)
	return (
		<div className={s.categories}>
			<ul>
				{category.map((cat, i) => {
					return (
						<li
							key={i}
							onClick={() => setActiveCat(i)}
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

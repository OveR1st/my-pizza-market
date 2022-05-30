import React from 'react'
import s from './styles.module.scss'

import clsx from 'clsx'

interface IProps {
	selectedPageHandler: (page: number) => void
	currentPage: number
}

const Pagination: React.FC<IProps> = ({ selectedPageHandler, currentPage }) => {
	const pageHandler = (pageSelect: number | string) => {
		const pageCheckHandler = (pageSelect: number) => {
			switch (pageSelect) {
				case 1:
					selectedPageHandler(pageSelect)

					break
				case 2:
					selectedPageHandler(pageSelect)

					break
				case 3:
					selectedPageHandler(pageSelect)

					break
				default:
					break
			}
		}
		if (pageSelect === 'prev' && currentPage !== 1) {
			selectedPageHandler(currentPage - 1)
		}
		if (pageSelect === 'next' && currentPage !== 3) {
			selectedPageHandler(currentPage + 1)
		} else {
			pageCheckHandler(Number(pageSelect))
		}
	}

	return (
		<div className={s.paginationWrapper}>
			<ul className={s.pagList}>
				<li onClick={() => pageHandler('prev')} className={clsx('disabled')}>
					&lt;
				</li>
				<li onClick={() => pageHandler(1)} className={clsx(1 === currentPage && s.selected)}>
					1
				</li>
				<li onClick={() => pageHandler(2)} className={clsx(2 === currentPage && s.selected)}>
					2
				</li>
				<li onClick={() => pageHandler(3)} className={clsx(3 === currentPage && s.selected)}>
					3
				</li>
				<li onClick={() => pageHandler('next')} className={clsx('next')}>
					&gt;
				</li>
			</ul>
		</div>
	)
}

export default Pagination

import clsx from 'clsx'
import React from 'react'
import { ReactComponent as SortSVG } from '../../assets/sortArrow.svg'

import s from './styles.module.scss'
const Sort: React.FC = () => {
	const [activeSortParam, setActiveSortParam] = React.useState(0)
	const [isOpenPopup, setIsOpenPopup] = React.useState(false)
	const sortParamsArray = [
		'популярности (DESC)',
		'популярности (ASC)',
		'цене (DESC)',
		'цене (ASC)',
		'алфавиту (DESC)',
		'алфавиту (ASC)',
	]

	const sortName = sortParamsArray[activeSortParam]
	return (
		<div className={s.sort}>
			<SortSVG />
			<b>Сортировка по:</b>
			<span onClick={() => setIsOpenPopup(!isOpenPopup)}> {sortName}</span>
			{isOpenPopup ? (
				<div className={s.sort__popup}>
					<ul>
						{sortParamsArray.map((param, i) => {
							return (
								<li
									onClick={() => setActiveSortParam(i)}
									className={clsx(activeSortParam === i && s.active)}
									key={i}
								>
									{param}
								</li>
							)
						})}
					</ul>
				</div>
			) : null}
		</div>
	)
}

export default Sort

import clsx from 'clsx'
import React from 'react'
import { ReactComponent as SortSVG } from '../../assets/sortArrow.svg'

import s from './styles.module.scss'

interface IProps {
	selectedSort: (sortBy: string, sortOrder: string) => void
}

const Sort: React.FC<IProps> = ({ selectedSort }) => {
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

	const selectedParamHandler = (param: string, i: number) => {
		setActiveSortParam(i)
		let [paramName, order] = param.split(' ')

		const newStr = order.replace(/[{()}]/g, '').toLowerCase()

		switch (paramName) {
			case 'популярности':
				paramName = 'rating'
				break
			case 'цене':
				paramName = 'price'
				break
			case 'алфавиту':
				paramName = 'title'
				break
		}
		// console.log('newStr', newStr)
		// console.log('paramName', paramName)

		selectedSort(paramName, newStr)
		setIsOpenPopup(false)
	}

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
									onClick={() => selectedParamHandler(param, i)}
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

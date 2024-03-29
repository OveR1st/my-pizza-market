import clsx from 'clsx'
import React from 'react'
import { ReactComponent as SortSVG } from '../../assets/sortArrow.svg'

import s from './styles.module.scss'
import { useOpenedPopup } from '../../hooks/useOpenedPopup'

interface IProps {
	selectedSort: (sortBy: string, sortOrder: string) => void
	sortBy: string
	sortOrder: string
}

const Sort: React.FC<IProps> = ({ selectedSort, sortBy, sortOrder }) => {
	const [activeSortParam, setActiveSortParam] = React.useState(0)

	const sortModalRef = React.useRef(null)

	const sortParamsArray = [
		'популярности (DESC)',
		'популярности (ASC)',
		'цене (DESC)',
		'цене (ASC)',
		'алфавиту (DESC)',
		'алфавиту (ASC)',
	]

	const sortName = sortParamsArray[activeSortParam]

	React.useEffect(() => {
		let convertSortName = ''
		switch (sortBy) {
			case 'rating':
				convertSortName = 'популярности'
				break
			case 'price':
				convertSortName = 'цене'
				break
			case 'title':
				convertSortName = 'алфавиту'
				break
		}
		const sortIndex = sortParamsArray.indexOf(`${convertSortName} (${sortOrder.toUpperCase()})`)
		setActiveSortParam(sortIndex)
	}, [sortBy, sortOrder])

	const selectedParamHandler = (param: string, i: number) => {
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

		selectedSort(paramName, newStr)
		setIsOpenPopup(false)
	}

	const { isOpenPopup, setIsOpenPopup } = useOpenedPopup(sortModalRef.current)

	return (
		<div ref={sortModalRef} className={s.sort}>
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

export default React.memo(Sort)

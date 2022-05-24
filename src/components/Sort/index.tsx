import React from 'react'
import { ReactComponent as SortSVG } from '../../assets/sortArrow.svg'

import s from './styles.module.scss'
const Sort: React.FC = () => {
	return (
		<div className={s.sort}>
			<SortSVG />
			<b>Сортировка по:</b>
			<span> популярности</span>
		</div>
	)
}

export default Sort

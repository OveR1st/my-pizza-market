import React from 'react'
import s from './styles.module.scss'
const NoMatch: React.FC = () => {
	return (
		<div className={s.emptyWrapper}>
			<h1>
				<span>😕</span> <br /> Ничего не найдено
			</h1>
			<p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
		</div>
	)
}

export default NoMatch

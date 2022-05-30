import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import s from './styles.module.scss'
const NoMatch: React.FC = React.memo(() => {
	let params = useParams()
	let navigate = useNavigate()

	const backHandler = () => {
		if (params['*']?.includes('error')) {
			navigate(-2)
		} else {
			navigate(-1)
		}
	}

	return (
		<div className={s.emptyWrapper}>
			<h1>
				<span>😕</span> <br /> Ничего не найдено
			</h1>
			<p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
			<button onClick={backHandler}>Back</button>
		</div>
	)
})

export default NoMatch

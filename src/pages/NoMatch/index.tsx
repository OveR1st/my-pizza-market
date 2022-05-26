import React from 'react'
import s from './styles.module.scss'
const NoMatch: React.FC = React.memo(() => {
	// const [count, setCount] = React.useState(0)
	// const [render, setRender] = React.useState(false)
	console.log('RENDER')
	React.useEffect(() => {
		console.log('USEFEECTG')
	}, [])
	return (
		<div className={s.emptyWrapper}>
			<h1>
				<span>😕</span> <br /> Ничего не найдено
			</h1>
			<button>clickCount</button>
			<p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
		</div>
	)
})

export default NoMatch

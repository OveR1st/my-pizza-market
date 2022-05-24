import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddSVG } from '../../../assets/addItem.svg'
import s from './styles.module.scss'

const PizzaItem: React.FC = () => {
	return (
		<div className={s.pizzaItem}>
			<Link to="/pizza/7">
				<img
					className="pizza-block__image"
					src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg"
					alt="Pizza"
				/>
				<h4 className="pizza-block__title">Маргарита</h4>
			</Link>
			<div className={s.pizzaItem__selector}>
				<ul>
					<li className={s.active}>тонкое</li>
					<li className="">традиционное</li>
				</ul>
				<ul>
					<li className={s.active}>26 см.</li>
					<li className="">30 см.</li>
					<li className="">40 см.</li>
				</ul>
			</div>
			<div className={s.pizzaItem__priceBox}>
				<div className={s.price}>от 450 грн</div>
				<button className={s.addBtn}>
					<AddSVG />
					<span>Добавить</span>
					<i>1</i>
				</button>
			</div>
		</div>
	)
}

export default PizzaItem

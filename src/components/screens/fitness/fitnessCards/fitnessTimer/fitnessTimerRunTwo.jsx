import cn from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../../layout/Layout.module.scss'
import Header from '../../../../layout/header/Header'
import HeaderBSK from '../../../../layout/headerbsk/HeaderBSK.jsx'
import Loader from '../../../../ui/Loader'
import ButtonFitness from '../../../../ui/button/ButtonFitness.jsx'
import {
	default as style,
	default as styles
} from '../../../profile/Profile.module.scss'
import { useProfile } from '../../../profile/useProfile.js'
import Timer from '../../Timer.jsx'
import './FitnessTimer.midule.scss'
const FitnessTimerRunTwo = () => {
	const { isLoading } = useProfile()
	const navigate = useNavigate()

	const [showModal, setShowModal] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setShowModal(true)
	}

	// select two
	const [valueSelect, setValueSelect] = useState(1)
	const handleSelect = event => {
		setValueSelect(event.target.value)
	}

	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/public/images/resours1.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/fitnessrunone')}
								src={'/public/images/back.png'}
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>Упражнение</h1>
						</>
					)}
				</div>

				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<p class='date'>Выполнить не менее 100-120 повторений </p>
							<p class='title'>Хоккеист</p>
						</div>
						<img
							src='https://i.pinimg.com/originals/34/f3/10/34f31056b0548173f8f97fbdbf418e86.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>

				<div className={styles.center}>
					<Timer />
				</div>
				<div className={styles.center}>
					<h3>Укажите количество выполненных упражнений</h3>
					<form onSubmit={handleSubmit}>
						<select
							className={style.select}
							value={valueSelect}
							onChange={handleSelect}
						>
							<option value='1'>1</option>
							<option value='2'>2</option>
						</select>
						<button type='submit' className={style.button}>
							Результаты тренировки
						</button>
					</form>
					{showModal && (
						<div className={style.modalcontainer}>
							<div className={style.modalcontent}>
								<h2>Результаты Тренировки: </h2>
								<h3>
									{'Калории: '}
									{(valueSelect * (Math.random() * 250)).toFixed(2)}
								</h3>
								<img
									src='../../../../../public/images/exercise.gif'
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<img
									src={
										'https://i.pinimg.com/originals/34/f3/10/34f31056b0548173f8f97fbdbf418e86.gif'
									}
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>

								<div>
									<h2>Тренировка выполнена !</h2>
									<img
										src={'/public/images/check.gif'}
										draggable={false}
										width={70}
										height={70}
										style={{ borderRadius: 14 }}
									/>
								</div>
								<button
									className={style.buttonsik}
									onClick={() => setShowModal(false)}
								>
									Вернуться к тренировке
								</button>
								<ButtonFitness clickHandler={() => navigate('/running')}>
									Пройти заново фитнес-карту "Бег"
								</ButtonFitness>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default FitnessTimerRunTwo

import cn from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../../../layout/Layout.module.scss'
import HeaderCoach from '../../../../../layout/header/HeaderCoach.jsx'
import HeaderBSK from '../../../../../layout/headerbsk/HeaderBSK.jsx'
import Loader from '../../../../../ui/Loader'
import ButtonFitness from '../../../../../ui/button/ButtonFitness.jsx'
import {
	default as style,
	default as styles
} from '../../../../profile/Profile.module.scss'
import { useProfile } from '../../../../profile/useProfile.js'
import './FitnessTimer.midule.scss'
import Timer from './Timer.jsx'
const FitnessTimerCrossfitSixCoach = () => {
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
				<HeaderCoach />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/fitness-crossfit-five-coach')}
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
							<h2 class='date'>Выполнить не менее 5-10 повторений </h2>
							<h1 class='title'>Ягодичный мост</h1>
						</div>
						<img src='../../../../../../public//images/ex5.gif' height={400} />
					</div>
				</div>
				<div className={styles.center}>
					<Timer />
				</div>
				<div className={styles.center}>
					<h3> Укажите количество выполненных упражнений</h3>
					<form onSubmit={handleSubmit}>
						<select
							className={style.select}
							value={valueSelect}
							onChange={handleSelect}
						>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
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
									{(valueSelect * (Math.random() * 200)).toFixed(2)}
								</h3>
								<img
									src={
										'https://post.healthline.com/wp-content/uploads/2020/06/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Lateral_Raise.gif'
									}
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<img
									src='../../../../../../public/images/ex3.gif'
									alt='article-cover'
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<img
									src={
										'https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif'
									}
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<div>
									<img
										src='../../../../../../public/images/ex4.gif'
										draggable={false}
										width={60}
										height={60}
										style={{ borderRadius: 14 }}
									/>
									<img
										src='../../../../../../public/images/ex.gif'
										draggable={false}
										width={60}
										height={60}
										style={{ borderRadius: 14 }}
									/>
									<img
										src='../../../../../../public//images/ex5.gif'
										draggable={false}
										width={60}
										height={60}
										style={{ borderRadius: 14 }}
									/>
								</div>
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
								<ButtonFitness clickHandler={() => navigate('/crossfit-coach')}>
									Пройти заново фитнес-карту "Железо"
								</ButtonFitness>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default FitnessTimerCrossfitSixCoach

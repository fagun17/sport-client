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
const FitnessTimerSkySix = () => {
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
								onClick={() => navigate('/fitnessskyfive')}
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
							<p class='date'>Выполнить не менее 80-100 повторений </p>
							<p class='title'>Пресс</p>
						</div>
						<img
							src='https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif'
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

								<h3 style={{ color: '#fff' }}>
									{'Калории: '}
									{(valueSelect * (Math.random() * 180)).toFixed(2)}
								</h3>
								<img
									src={
										'https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif'
									}
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<img
									src={
										'https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif'
									}
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<img
									src={
										'https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif'
									}
									draggable={false}
									width={60}
									height={60}
									style={{ borderRadius: 14 }}
								/>
								<div>
									<img
										src={
											'https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif'
										}
										draggable={false}
										width={60}
										height={60}
										style={{ borderRadius: 14 }}
									/>
									<img
										src={
											'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif'
										}
										draggable={false}
										width={60}
										height={60}
										style={{ borderRadius: 14 }}
									/>
									<img
										src={
											'https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif'
										}
										draggable={false}
										width={60}
										height={60}
										style={{ borderRadius: 14 }}
									/>
								</div>
								<div>
									<h3>Тренировка выполнена!</h3>

									<img
										src={'/public/images/check.gif'}
										draggable={false}
										width={70}
										height={70}
										style={{ borderRadius: 14 }}
									/>
								</div>
								<div style={{ justifyItems: 'center' }}>
									<button
										className={style.buttonsik}
										onClick={() => setShowModal(false)}
									>
										Вернуться к тренировке
									</button>

									<ButtonFitness clickHandler={() => navigate('/skiings')}>
										Пройти заново фитнес-карту "Кроссфит"
									</ButtonFitness>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default FitnessTimerSkySix

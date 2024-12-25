import cn from 'clsx'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import Loader from '../../../ui/Loader'
import styles from '../../profile/Profile.module.scss'

import { useNavigate } from 'react-router-dom'
import HeaderBSK from '../../../layout/headerbsk/HeaderBSK.jsx'
import Button from '../../../ui/button/Button'
import { useProfile } from '../../profile/useProfile.js'
const Crosfit = () => {
	const { isLoading } = useProfile()
	const navigate = useNavigate()
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
								onClick={() => navigate('/fitness')}
								src={'/public/images/back.png'}
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>Тренировка с железом</h1>
						</>
					)}
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 40-60 повторений </h2>
							<h1 class='title'>Подъем плеч</h1>
						</div>
						<img
							src='https://post.healthline.com/wp-content/uploads/2020/06/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Lateral_Raise.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 4-8 повторений </h2>
							<h1 class='title'>Работа со штангой</h1>
						</div>
						<img
							src='../../../../../../public/images/ex3.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 40-50 повторений </h2>
							<h1 class='title'>Подъем на бицепс</h1>
						</div>
						<img
							src='https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 4-8 повторений </h2>
							<h1 class='title'>Подъем моста</h1>
						</div>
						<img src='../../../../../../public/images/ex4.gif' height={400} />
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 40-60 повторений</h2>
							<h1 class='title'>Подъем гири</h1>
						</div>
						<img src='../../../../../../public//images/ex.gif' height={400} />
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 4-8 повторений </h2>
							<h1 class='title'>Ягодичный мост</h1>
						</div>
						<img src='../../../../../../public//images/ex5.gif' height={400} />
					</div>
				</div>
				<Button clickHandler={() => navigate('/fitnesscrossfitone')}>
					Начать тренировку
				</Button>
			</div>
		</>
	)
}

export default Crosfit

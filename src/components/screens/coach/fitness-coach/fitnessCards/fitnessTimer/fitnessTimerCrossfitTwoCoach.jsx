import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../../../layout/Layout.module.scss'
import HeaderCoach from '../../../../../layout/header/HeaderCoach.jsx'
import HeaderBSK from '../../../../../layout/headerbsk/HeaderBSK.jsx'
import Loader from '../../../../../ui/Loader'
import Button from '../../../../../ui/button/Button'
import styles from '../../../../profile/Profile.module.scss'
import { useProfile } from '../../../../profile/useProfile.js'
import './FitnessTimer.midule.scss'
import Timer from './Timer.jsx'
const FitnessTimerCrossfitTwoCoach = () => {
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
				<HeaderCoach />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/fitness-crossfit-one-coach')}
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
							<h2 class='date'>Выполнить не менее 4-8 повторений</h2>
							<h1 class='title'>Работа со штангой</h1>
						</div>
						<img
							src='../../../../../../public/images/ex3.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div className={styles.center}>
					<Timer />
				</div>

				<Button clickHandler={() => navigate('/fitness-crossfit-free-coach')}>
					Следующее упражнение
				</Button>
			</div>
		</>
	)
}

export default FitnessTimerCrossfitTwoCoach

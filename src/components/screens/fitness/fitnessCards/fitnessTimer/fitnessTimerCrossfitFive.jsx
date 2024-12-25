import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../../layout/Layout.module.scss'
import Header from '../../../../layout/header/Header'
import HeaderBSK from '../../../../layout/headerbsk/HeaderBSK.jsx'
import Loader from '../../../../ui/Loader'
import Button from '../../../../ui/button/Button'
import styles from '../../../profile/Profile.module.scss'
import { useProfile } from '../../../profile/useProfile.js'
import Timer from '../../Timer.jsx'
import './FitnessTimer.midule.scss'
const FitnessTimerCrossfitFive = () => {
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
								onClick={() => navigate('/fitnesscrossfitfour')}
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
							<h2 class='date'>Выполнить не менее 40-60 повторений</h2>
							<h1 class='title'>Подъем гири</h1>
						</div>
						<img src='../../../../../../public/images/ex.gif' height={400} />
					</div>
				</div>
				<div className={styles.center}>
					<Timer />
				</div>
				<Button clickHandler={() => navigate('/fitnesscrossfitsix')}>
					Следующее упражнение
				</Button>
			</div>
		</>
	)
}

export default FitnessTimerCrossfitFive

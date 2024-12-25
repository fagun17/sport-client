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
const FitnessTimerSkyOneCoach = () => {
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
								onClick={() => navigate('/skiings-coach')}
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
							<p class='date'>Выполнить не менее 80-100 прыжков</p>
							<p class='title'>Ножницы</p>
						</div>
						<img
							src='https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div className={styles.center}>
					<Timer />
				</div>

				<Button clickHandler={() => navigate('/fitness-sky-two-coach')}>
					Следующее упражнение
				</Button>
			</div>
		</>
	)
}

export default FitnessTimerSkyOneCoach

import cn from 'clsx'
import { useEffect, useState } from 'react'
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
import { getPadTime } from './getPadTime.jsx'
const FitnessTimerSkyFourCoach = () => {
	const { isLoading } = useProfile()
	const navigate = useNavigate()
	const [timeLeft, setTimeLeft] = useState(2 * 60)
	const [isCounting, setIsCounting] = useState(false)
	const minutes = getPadTime(Math.floor(timeLeft / 60))
	const seconds = getPadTime(timeLeft - minutes * 60)

	useEffect(() => {
		const interval = setInterval(() => {
			isCounting && setTimeLeft(timeLeft => (timeLeft >= 1 ? timeLeft - 1 : 0))
		}, 1000)
		if (timeLeft === 0) setIsCounting(false)
		return () => {
			clearInterval(interval)
		}
	}, [timeLeft, isCounting])

	const handleStart = () => {
		if (timeLeft === 0) setTimeLeft(2 * 60)
		setIsCounting(true)
	}
	const handleStop = () => {
		setIsCounting(false)
	}
	const handleReset = () => {
		setIsCounting(false)
		setTimeLeft(2 * 60)
		alert('Упражнение выполнено !')
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
								onClick={() => navigate('/fitness-sky-free-coach')}
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
							<p class='date'>Простоять в планке не менее 2 минут</p>
							<p class='title'>Планка</p>
						</div>
						<img
							src='https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div className={styles.center}>
					<Timer />
				</div>

				<Button clickHandler={() => navigate('/fitness-sky-five-coach')}>
					Следующее упражнение
				</Button>
			</div>
		</>
	)
}

export default FitnessTimerSkyFourCoach

import cn from 'clsx'
import { useEffect, useState } from 'react'
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
import { getPadTime } from './getPadTime'
const FitnessTimerSkyFree = () => {
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
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/fitnessskytwo')}
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
							<p class='date'>Выполнить не менее 80-100 повторений</p>
							<p class='title'>Косые мышцы пресса</p>
						</div>
						<img
							src='https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div className={styles.center}>
					<Timer />
				</div>

				<Button clickHandler={() => navigate('/fitnessskyfour')}>
					Следующее упражнение
				</Button>
			</div>
		</>
	)
}

export default FitnessTimerSkyFree

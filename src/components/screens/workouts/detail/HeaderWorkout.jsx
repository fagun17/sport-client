import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'

import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import styles from './Workout.module.scss'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/statistics2.jpg')`,
					height: 380
				}}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>
							{'Количество минут: ' + workoutLog.minute}
						</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
		</>
	)
}

export default HeaderWorkout

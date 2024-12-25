import cn from 'clsx'

import stylesLayout from '../../../../layout/Layout.module.scss'

import HeaderCoach from '../../../../layout/header/HeaderCoach'
import HeaderBSK from '../../../../layout/headerbsk/HeaderBSK'
import styles from './Workout.module.scss'

const HeaderWorkoutCoach = ({ workoutLog, isSuccess }) => {
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
				<HeaderCoach backLink='/workouts-coach' />

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

export default HeaderWorkoutCoach

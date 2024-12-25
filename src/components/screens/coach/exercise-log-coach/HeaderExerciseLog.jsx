import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'

import HeaderCoach from '../../../layout/header/HeaderCoach'
import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/man.jpg')`,
				height: 380
			}}
		>
			<HeaderCoach
				backLink={
					isSuccess
						? `/workouts-coach/${exerciseLog.workoutLogId}`
						: '/workouts-coach'
				}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
						}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog

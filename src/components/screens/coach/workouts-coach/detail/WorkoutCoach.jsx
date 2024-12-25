import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Loader from '../../../../ui/Loader.jsx'

import WorkoutLogService from '../../../../../services/workout/workout-log.service.js'

import Button from '../../../../ui/button/Button.jsx'
import ExerciseItem from './ExerciseItem.jsx'
import HeaderWorkoutCoach from './HeaderWorkoutCoach.jsx'
import styles from './Workout.module.scss'

const WorkoutCoach = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const { mutate } = useMutation(
		['complete workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess() {
				navigate('/workouts-coach')
			}
		}
	)

	return (
		<>
			<HeaderWorkoutCoach isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map(exerciseLog => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Закончить тренировку</Button>
			</div>
		</>
	)
}

export default WorkoutCoach

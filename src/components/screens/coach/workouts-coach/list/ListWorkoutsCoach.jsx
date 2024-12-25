import Loader from '../../../../ui/Loader'
import Alert from '../../../../ui/allert/Alert'

import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../../app.constants'
import LayoutCoach from '../../../../layout/LayoutCoach'
import styles from '../detail/Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import { useWorkoutsCoach } from './useWorkouts'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const ListWorkoutsCoach = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkoutsCoach()

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	const [workouts, setWorkouts] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/workouts`)
			setWorkouts(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredWorkouts = workouts.filter(workout => {
		const regex = new RegExp(search, 'gi')
		return workout.name.match(regex)
	})

	return (
		<>
			<LayoutCoach bgImage='/images/workouts.jpg' heading='Тренировки' />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						<input
							className={styles.search}
							placeholder='Найти тренировки...'
							onChange={handleSearch}
							onClick={() => fetchData()}
						></input>
						{filteredWorkouts.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default ListWorkoutsCoach

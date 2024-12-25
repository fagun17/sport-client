import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import { useCompleteLog } from './hooks/useCompleteLog'
import { useExerciseLogCoach } from './hooks/useExerciseLogCoach'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const ExerciseLogCoach = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		error,
		errorChange,
		getState,
		onChangeState,
		toggleTime
	} = useExerciseLogCoach()

	const { completeLog, errorCompleted } = useCompleteLog()

	return (
		<>
			<HeaderBSK />
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLogCoach

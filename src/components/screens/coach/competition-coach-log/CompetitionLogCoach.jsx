import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import CompetitionError from './CompetitionError'
import styles from './CompetitionLog.module.scss'
import HeaderCompetitionLogCoach from './HeaderCompetitionLogCoach'
import { useCompetitionLog } from './hooks/useCompetitionLogCoach'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const CompetitionLogCoach = () => {
	const {
		competitionLog,
		isLoading,
		error,
		isSuccess,
		errorChange,
		onChangeState,
		getState,
		toggleTime
	} = useCompetitionLog()

	return (
		<>
			<HeaderBSK />
			<HeaderCompetitionLogCoach
				competitionLog={competitionLog}
				isSuccess={isSuccess}
			/>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<CompetitionError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{competitionLog?.times.map(item => (
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

				{isSuccess && competitionLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default CompetitionLogCoach

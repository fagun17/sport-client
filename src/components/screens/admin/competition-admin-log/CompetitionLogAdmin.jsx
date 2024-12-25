import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import CompetitionError from './CompetitionError'
import styles from './CompetitionLog.module.scss'
import HeaderCompetitionLogAdmin from './HeaderCompetitionLogAdmin'
import { useCompetitionLogAdmin } from './hooks/useCompetitionLogAdmin'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const CompetitionLogAdmin = () => {
	const {
		competitionLog,
		isLoading,
		error,
		isSuccess,
		errorChange,
		onChangeState,
		getState,
		toggleTime
	} = useCompetitionLogAdmin()

	return (
		<>
			<HeaderBSK />
			<HeaderCompetitionLogAdmin
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

export default CompetitionLogAdmin

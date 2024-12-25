import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TournamentLogService from '../../../../services/tournament/tournament-log.service.js'
import Loader from '../../../ui/Loader.jsx'
import Button from '../../../ui/button/Button.jsx'
import CompetitionItemCoach from './CompetitionItem.jsx'
import HeaderTournamentCoach from './HeaderTournamentCoach.jsx'
import RegisterItem from './RegisterItem.jsx'
import styles from './Tournament.module.scss'
const Tournament = () => {
	const { id } = useParams()

	const {
		data: tournamentLog,
		isSuccess,
		isLoading
	} = useQuery(
		['get tournament log', id],
		() => TournamentLogService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	const navigate = useNavigate()

	const { mutate } = useMutation(
		['complete tournament'],
		() => TournamentLogService.complete(id),
		{
			onSuccess() {
				navigate('/tournaments-coach')
			}
		}
	)

	return (
		<>
			<HeaderTournamentCoach
				isSuccess={isSuccess}
				tournamentLog={tournamentLog}
			/>
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
					<>
						<div className={styles.wrapper}>
							{tournamentLog?.competitionLogs?.map(competitionLog => (
								<Fragment key={competitionLog.id}>
									<CompetitionItemCoach competitionLog={competitionLog} />
								</Fragment>
							))}
						</div>
						<div className={styles.wrapper}>
							{tournamentLog?.registerLogs?.map(registerLog => (
								<Fragment key={registerLog.id}>
									<RegisterItem registerLog={registerLog} />
								</Fragment>
							))}
						</div>
					</>
				)}

				<Button clickHandler={() => mutate()}>Турниры завершены</Button>
			</div>
		</>
	)
}

export default Tournament

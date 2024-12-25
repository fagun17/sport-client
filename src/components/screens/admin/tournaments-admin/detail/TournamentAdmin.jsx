import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TournamentLogService from '../../../../../services/tournament/tournament-log.service.js'
import Loader from '../../../../ui/Loader.jsx'
import Button from '../../../../ui/button/Button.jsx'
import CompetitionItemAdmin from './CompetitionItemAdmin.jsx'
import HeaderTournamentAdmin from './HeaderTournamentAdmin.jsx'
import RegisterItem from './RegisterItem.jsx'
import styles from './Tournament.module.scss'
const TournamentAdmin = () => {
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
				navigate('/tournaments-admin')
			}
		}
	)

	return (
		<>
			<HeaderTournamentAdmin
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
									<CompetitionItemAdmin competitionLog={competitionLog} />
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

				<Button clickHandler={() => mutate()}>
					Спортивное событие завершено
				</Button>
			</div>
		</>
	)
}

export default TournamentAdmin

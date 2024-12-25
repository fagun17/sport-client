import cn from 'clsx'

import Header from '../../../layout/header/Header'
import stylesLayout from '../../../layout/Layout.module.scss'

import styles from './CompetitionLog.module.scss'

const HeaderCompetitionLogCoach = ({ isSuccess, competitionLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/turnirs.jpg')`,
				height: 356
			}}
		>
			<Header
				backLink={
					isSuccess
						? `/tournament-coach/${competitionLog.tournamentLogId}`
						: '/tournaments-coach'
				}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL +
							competitionLog.competition.iconSport
						}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>
						{competitionLog.competition.name}
					</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderCompetitionLogCoach

import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

import styles from './CompetitionLog.module.scss'

const HeaderCompetitionLog = ({ isSuccess, competitionLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/turnirs.jpg')`,
				height: 380
			}}
		>
			<Header
				backLink={
					isSuccess
						? `/tournament/${competitionLog.tournamentLogId}`
						: '/tournaments'
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

export default HeaderCompetitionLog

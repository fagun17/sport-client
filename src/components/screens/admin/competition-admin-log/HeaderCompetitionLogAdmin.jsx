import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'

import HeaderAdmin from '../../../layout/header/HeaderAdmin'
import styles from './CompetitionLog.module.scss'

const HeaderCompetitionLogAdmin = ({ isSuccess, competitionLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/turnirs.jpg')`,
				height: 356
			}}
		>
			<HeaderAdmin
				backLink={
					isSuccess
						? `/tournament-admin/${competitionLog.tournamentLogId}`
						: '/tournaments-admin'
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

export default HeaderCompetitionLogAdmin

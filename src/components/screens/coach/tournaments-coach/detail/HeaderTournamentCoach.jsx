import cn from 'clsx'

import stylesLayout from '../../../../layout/Layout.module.scss'

import HeaderCoach from '../../../../layout/header/HeaderCoach'
import HeaderBSK from '../../../../layout/headerbsk/HeaderBSK'
import styles from './Tournament.module.scss'

const HeaderTournamentCoach = ({ tournamentLog, isSuccess }) => {
	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/competition.jpg')`,
					height: 356
				}}
			>
				<HeaderCoach backLink='/tournaments-coach' />

				{isSuccess && (
					<div>
						<time className={styles.time}>
							{' Количество турниров по виду спорта:' + tournamentLog.minute}
						</time>
					</div>
				)}
			</div>
		</>
	)
}

export default HeaderTournamentCoach

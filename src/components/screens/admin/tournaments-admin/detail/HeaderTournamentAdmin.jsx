import cn from 'clsx'

import stylesLayout from '../../../../layout/Layout.module.scss'

import HeaderAdmin from '../../../../layout/header/HeaderAdmin'
import HeaderBSK from '../../../../layout/headerbsk/HeaderBSK'
import styles from './Tournament.module.scss'

const HeaderTournamentAdmin = ({ tournamentLog, isSuccess }) => {
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
				<HeaderAdmin backLink='/tournaments-admin' />

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

export default HeaderTournamentAdmin

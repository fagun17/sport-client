import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'

import LayoutCoach from '../../../../layout/LayoutCoach'
import HeaderCoach from '../../../../layout/header/HeaderCoach'
import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import styles from './Tournament.module.scss'

const HeaderTournament = ({ tournamentLog, isSuccess }) => {
	return (
		<LayoutCoach>
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
		</LayoutCoach>
	)
}

export default HeaderTournament

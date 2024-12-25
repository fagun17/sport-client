import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'

import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import styles from './Tournament.module.scss'

const HeaderTournament = ({ tournamentLog, isSuccess }) => {
	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/competition.jpg')`,
					height: 380
				}}
			>
				<Header backLink='/tournaments' />

				{isSuccess && (
					<div>
						<time style={{ color: '#fff' }} className={styles.time}>
							{' Количество турниров по виду спорта:' + tournamentLog.minute}
						</time>
					</div>
				)}
			</div>
		</>
	)
}

export default HeaderTournament

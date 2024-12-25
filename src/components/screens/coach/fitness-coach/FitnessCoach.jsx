import cn from 'clsx'
import stylesLayout from '../../../layout/Layout.module.scss'
import Loader from '../../../ui/Loader'
import styles from '../../profile/Profile.module.scss'

import { useNavigate } from 'react-router-dom'
import HeaderCoach from '../../../layout/header/HeaderCoach.jsx'
import HeaderBSK from '../../../layout/headerbsk/HeaderBSK.jsx'
import { useProfile } from '../../profile/useProfile.js'
import ComponentStyleCoach from './stylesCards/ComponentStyleCoach.jsx'
const FitnessCoach = () => {
	const { isLoading } = useProfile()
	const navigate = useNavigate()
	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/public/images/resours1.jpg')`,
					height: 356
				}}
			>
				<HeaderCoach />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/fitness-hi-coach')}
								src={'/public/images/back.png'}
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>Фитнес карты</h1>
						</>
					)}
				</div>
				<ComponentStyleCoach />
			</div>
		</>
	)
}

export default FitnessCoach

import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header.jsx'
import Loader from '../../ui/Loader.jsx'
import styles from '../profile/Profile.module.scss'

import { useNavigate } from 'react-router-dom'
import HeaderBSK from '../../layout/headerbsk/HeaderBSK.jsx'
import { useProfile } from '../profile/useProfile.js'
import ComponentStyleHi from './stylesCards/ComponentStyleHi.jsx'
const FitnessOpenHi = () => {
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
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src={'/public/images/gantel.png'}
								alt='Profile'
								height='50'
								draggable={false}
							/>
							<h3 className={stylesLayout.heading}>Фитнес марафон</h3>
							<div>
								<label>
									Представляет из себя выполнение тематических упражнений,
									разделенных на 3 фитнес-карты.
								</label>
							</div>
						</>
					)}
				</div>
				<ComponentStyleHi />
			</div>
		</>
	)
}

export default FitnessOpenHi

import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import HeaderBSK from '../../../layout/headerbsk/HeaderBSK.jsx'
import Loader from '../../../ui/Loader'
import Button from '../../../ui/button/Button'
import styles from '../../profile/Profile.module.scss'
import { useProfile } from '../../profile/useProfile.js'
const Run = () => {
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
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/fitness')}
								src={'/public/images/back.png'}
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>Беговые упражнения</h1>
						</>
					)}
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 100-120 повторений</h2>
							<h1 class='title'>Захлест голени</h1>
						</div>
						<img src='../../../../../public/images/exercise.gif' height={600} />
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 80-100 повторений</h2>
							<h1 class='title'>Хоккеист</h1>
						</div>
						<img
							src='https://i.pinimg.com/originals/34/f3/10/34f31056b0548173f8f97fbdbf418e86.gif'
							height={600}
						/>
					</div>
				</div>
				<Button clickHandler={() => navigate('/fitnessrunone')}>
					Начать тренировку
				</Button>
			</div>
		</>
	)
}
export default Run

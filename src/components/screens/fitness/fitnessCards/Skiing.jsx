import cn from 'clsx'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import Loader from '../../../ui/Loader'
import styles from '../../profile/Profile.module.scss'

import { useNavigate } from 'react-router-dom'
import HeaderBSK from '../../../layout/headerbsk/HeaderBSK.jsx'
import Button from '../../../ui/button/Button'
import { useProfile } from '../../profile/useProfile.js'
const Skiings = () => {
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
							<h1 className={stylesLayout.heading}>Кроссфит</h1>
						</>
					)}
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<p class='date'>Выполнить не менее 80-100 повторений </p>
							<p class='title'>Ножницы</p>
						</div>
						<img
							src='https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<h2 class='date'>Выполнить не менее 100-120 повторений </h2>
							<h1 class='title'>Альпинист</h1>
						</div>
						<img
							src='https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<p class='date'>Выполнить не менее 80-100 повторений </p>
							<p class='title'>Косые мышцы пресса</p>
						</div>
						<img
							src='https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<p class='date'>Простоять в планке не менее 2 минут</p>
							<p class='title'>Планка</p>
						</div>
						<img
							src='https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<p class='date'>
								Выполнить не менее 80-100 прыжков "звездочкой"{' '}
							</p>
							<p class='title'>Звездочка</p>
						</div>
						<img
							src='https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<div class='center'>
					<div class='article-card'>
						<div class='content'>
							<p class='date'>Выполнить не менее 80-100 повторений </p>
							<p class='title'>Пресс</p>
						</div>
						<img
							src='https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif'
							alt='article-cover'
							height={400}
						/>
					</div>
				</div>
				<Button clickHandler={() => navigate('/fitnessskyone')}>
					Начать тренировку
				</Button>
			</div>
		</>
	)
}

export default Skiings

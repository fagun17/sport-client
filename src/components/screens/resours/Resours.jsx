import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import Loader from '../../ui/Loader'
import styles from '../profile/Profile.module.scss'

import HeaderBSK from '../../layout/headerbsk/HeaderBSK'
import { useProfile } from '../profile/useProfile'
const Resours = () => {
	const { isLoading } = useProfile()
	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/public/images/resours1.jpg')`,
					height: 380
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src={'/public/images/header/resoirsMain.png'}
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>Спортивные ресурсы</h1>
						</>
					)}
				</div>

				<div
					className='wrapper-inner-page'
					style={{ paddingLeft: 0, paddingRight: 0 }}
				>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://russiarunning.com/?)&ysclid=lmp4wt6ggw300946785'
							>
								RusRunning
							</a>
							<img
								src={'/public/images/resours/RusRunning.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 14 }}
							/>
						</div>

						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://yandex.ru/sport'
							>
								ЯндексСпорт
							</a>
							<img
								src={'/public/images/resours/YandexSport.jpg'}
								width={200}
								height={200}
								draggable={false}
								style={{ borderRadius: 15 }}
							/>
						</div>
					</div>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://matchtv.ru'
							>
								Матч
							</a>
							<img
								src={'/public/images/resours/Match.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 14 }}
							/>
						</div>

						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://www.livesport.ru'
							>
								LiveSport
							</a>
							<img
								src={'/public/images/resours/Sport.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 15 }}
							/>
						</div>
					</div>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://www.khl.ru'
							>
								Хоккей
							</a>
							<img
								src={
									'https://img.freepik.com/free-photo/hockey-players_654080-2153.jpg?w=1800&t=st=1703015141~exp=1703015741~hmac=4076a938a36a65fabd5169aadf881e43a34254763612f2a4b9e92595841385cc'
								}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 14 }}
							/>
						</div>

						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://allboxing.ru'
							>
								AllBoxing
							</a>
							<img
								src={'/public/images/resours/AllBoxing.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 15 }}
							/>
						</div>
					</div>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://www.readfootball.com'
							>
								Футбол
							</a>
							<img
								src={'/public/images/resours/RusFootball.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 14 }}
							/>
						</div>

						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://www.gotennis.ru'
							>
								Теннис
							</a>
							<img
								src={'/public/images/resours/Tennis.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 15 }}
							/>
						</div>
					</div>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://olympic.ru'
							>
								О.комитет РФ
							</a>
							<img
								src={'/public/images/resours/Olimpic.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 14 }}
							/>
						</div>

						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://rusbiathlon.ru'
							>
								Биатлон
							</a>
							<img
								src={'/public/images/resours/Biatlon.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 15 }}
							/>
						</div>
					</div>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://russiabasket.ru/?ysclid=lmp5s4tztu335210651'
							>
								Баскетбол
							</a>
							<img
								src={'/public/images/resours/Basketball.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 14 }}
							/>
						</div>

						<div className={styles.heading}>
							<a
								style={{ color: '#fff', fontSize: 30 }}
								href='https://sportliga.com'
							>
								SportLiga
							</a>
							<img
								src={'/public/images/resours/SportLiga.jpg'}
								draggable={false}
								width={200}
								height={200}
								style={{ borderRadius: 15 }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Resours

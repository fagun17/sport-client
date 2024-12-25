import cn from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../layout/Layout.module.scss'
import Loader from '../../ui/Loader'

import styles from '../profile/Profile.module.scss'

import { useAuth } from '../../../hooks/useAuth.js'
import HeaderBSK from '../../layout/headerbsk/HeaderBSK.jsx'
import { useProfile } from '../profile/useProfile.js'
const LoaderScreen = () => {
	const { data, isLoading } = useProfile()
	const navigate = useNavigate()
	const { isAuth, setIsAuth } = useAuth()
	const Nav = setTimeout(() => {
		if (data?.key2 === 'Юзер') {
			navigate('/home')
		} else if (data?.key2 === 'Тренер') {
			navigate('/coach')
		} else if (data?.key2 === 'Админ') {
			navigate('/users-all-key')
		}
	}, 1000)
	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/public/images/authfon.jpg')`,
					height: 380
				}}
			>
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<h3 className={stylesLayout.heading}>Загрузка данных</h3>
							<h1 style={{ marginTop: 20 }} className={stylesLayout.name}>
								{data?.email}
							</h1>
							<div style={{ marginTop: 70 }}>
								<img
									src={'/public/images/three-dots.svg'}
									draggable={false}
									style={{ borderRadius: 14 }}
									height={50}
									width={200}
								/>
							</div>
						</>
					)}
				</div>

				<div
					className='wrapper-inner-page'
					style={{ paddingLeft: 0, paddingRight: 0 }}
				>
					<div className={styles.center}></div>
				</div>
			</div>
		</>
	)
}

export default LoaderScreen

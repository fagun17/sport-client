import cn from 'clsx'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../layout/Layout.module.scss'
import HeaderCoach from '../../../layout/header/HeaderCoach'
import HeaderBSK from '../../../layout/headerbsk/HeaderBSK'
import Loader from '../../../ui/Loader'
import Modal from './ModalShow'
import styles from './ProfileCoach.module.scss'
import Statistics from './statistics/Statistics'
import { useProfile } from './useProfile'
const ProfileCoach = () => {
	const { data, isLoading } = useProfile()
	const navigate = useNavigate()
	const [showModal, setShowModal] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	// загрузка фото в профиль
	const [image, setImage] = useState(null)
	function handleImageUpload(event) {
		const file = event.target.files[0]
		const reader = new FileReader()

		reader.onload = function () {
			const imageDataUrl = reader.result
			setImage(imageDataUrl)
			localStorage.setItem('uploadedImage', imageDataUrl)
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}
	//
	useEffect(() => {
		const savedImage = localStorage.getItem('uploadedImage')
		if (savedImage) {
			setImage(savedImage)
		}
	}, [])

	const Nav = () => {
		if (data?.key === 1) {
			navigate('/loader')
		} else navigate('/')
	}
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
				<HeaderCoach />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<p
								onClick={() => setShowModal(true)}
								style={{ borderRadius: 360, cursor: 'pointer' }}
							>
								фото профиля
							</p>
							{image && (
								<img
									style={{ borderRadius: 360, cursor: 'pointer' }}
									src={image}
									height='80'
									width='80'
									type='file'
									alt='Uploaded'
									onClick={() => setShowModal(true)}
								/>
							)}

							<div>
								<Modal show={showModal} setShow={setShowModal} />
							</div>

							<h3 className={stylesLayout.heading}>{data?.email}</h3>
						</>
					)}
				</div>

				<Statistics />

				<div
					className='wrapper-inner-page'
					style={{ paddingLeft: 0, paddingRight: 0 }}
				>
					<div className={styles.before_after}>
						<div className={styles.heading}>
							<h1>До</h1>
							<img
								src={'/public/images/fatman.jpg'}
								draggable={false}
								style={{ borderRadius: 14 }}
								height={250}
								width={300}
							/>
						</div>

						<div className={styles.heading}>
							<h1>После</h1>
							<img
								src={'/public/images/FitnessWin.png'}
								draggable={false}
								style={{ borderRadius: 15 }}
								height={250}
								width={300}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfileCoach

import { default as React, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './ModalWindow.module.scss'
const Modal = ({ show, setShow }) => {
	const [isOpen, setIsOpen] = useState(false)
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
	// Функция для отмены загруженного изображения
	const handleCancelImage = () => {
		setImage(null)
		localStorage.removeItem('uploadedImage')
		setImage(null)
	}
	const closeModal = () => {
		setShow(false)
		setIsOpen(false)
	}
	const handleRefresh = () => {
		window.location.reload()
	}
	return (
		<CSSTransition
			in={show}
			timeout={300}
			className={styles.modal}
			unmountOnExit
			onEnter={() => setIsOpen(true)}
			onExited={() => setIsOpen(false)}
		>
			<div className={styles.modal}>
				<div className={styles.modalcontent}>
					<div>
						<input
							style={{ cursor: 'pointer' }}
							onChange={handleImageUpload}
							type='file'
						/>
						<button onClick={handleCancelImage}>Удалить </button>
					</div>
					<button onClick={handleRefresh}>Сохранить</button>
					<button
						style={{ cursor: 'pointer', fontSize: 20 }}
						className={styles.modalwindowone}
						onClick={closeModal}
					>
						Закрыть
					</button>
				</div>
			</div>
		</CSSTransition>
	)
}

export default Modal

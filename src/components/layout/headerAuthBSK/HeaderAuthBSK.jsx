import { useNavigate } from 'react-router-dom'
import HamburgerBSK from '../hamburger/HamburgerBSK'
import styles from '../headerbsk/HeaderBSK.module.scss'
const HeaderAuthBSK = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.header}>
			<div className={styles.header__content}>
				<div>
					<span className={styles.logo}>Тренер.БСК</span>
				</div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>

				<HamburgerBSK />

				<div></div>
			</div>
		</div>
	)
}

const Button = () => {
	return <button className={styles.button}>Выйти</button>
}

export default HeaderAuthBSK

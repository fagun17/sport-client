import { useNavigate } from 'react-router-dom'
import styles from './Tournament.module.scss'
const RegisterItem = ({ competitionLog, registerLog }) => {
	const navigation = useNavigate()

	return (
		<div className={styles.delete}>
			<h3 style={{ color: '#fff', fontSize: 24 }}>
				Зарегистрированный участник в спортивном событии:{' '}
			</h3>
			<span>
				<h3 className={styles.happy} style={{ color: '#fff', fontSize: 24 }}>
					<h3 className={styles.happy} style={{ color: '#fff', fontSize: 24 }}>
						{registerLog.register.fullName}
					</h3>
				</h3>
			</span>
		</div>
	)
}

export default RegisterItem

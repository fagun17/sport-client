import { IoMdArrowBack } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import HamburgerAdmin from '../hamburger/HamburgerAdmin'
import styles from './Header.module.scss'

const HeaderAdmin = ({ backLink = '/coach' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/users-all-key' && isAuth ? (
						<button
							onClick={() => {
								navigate('/tournaments-admin-registrations-users')
							}}
						>
							<IoPeople fill='#3399ff' fontSize={30} />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack fill='#26ca' fontSize={29} />
						</button>
					)}
					<HamburgerAdmin />
				</>
			)}
		</header>
	)
}

export default HeaderAdmin

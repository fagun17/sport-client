import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

import { IoPersonSharp } from 'react-icons/io5'
import { useAuth } from '../../../hooks/useAuth'
import HamburgerCoach from '../hamburger/HamburgerCoach'
import styles from './Header.module.scss'

const HeaderCoach = ({ backLink = '/coach' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/coach' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile-coach')
							}}
						>
							<IoPersonSharp fill='#3399ff' fontSize={27} />
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
					<HamburgerCoach />
				</>
			)}
		</header>
	)
}

export default HeaderCoach

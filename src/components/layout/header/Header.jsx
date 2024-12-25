import { IoMdArrowBack } from 'react-icons/io'
import { IoPersonSharp } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/home' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/home' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<IoPersonSharp fill='#3399ff' fontSize={25} />
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
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header

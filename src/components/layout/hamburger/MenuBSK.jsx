import cn from 'clsx'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../app.constants'
import { useAuth } from '../../../hooks/useAuth'
import styles from './Hamburger.module.scss'

const MenuBSK = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()

	const navigate = useNavigate()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)

		navigate('/auth')
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<li>
				<h2 style={{ cursor: 'pointer' }} onClick={logoutHandler}>
					Выйти
				</h2>
			</li>
		</nav>
	)
}

export default MenuBSK

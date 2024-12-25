import { CgMenuRightAlt } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import styles from './Hamburger.module.scss'
import MenuAdmin from './MenuAdmin'
const HamburgerAdmin = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<IoClose style={{ color: '#3399ff' }} color='#3399ff' />
				) : (
					<CgMenuRightAlt style={{ color: '#3399ff' }} color='#3399ff' />
				)}
			</button>
			<MenuAdmin isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default HamburgerAdmin

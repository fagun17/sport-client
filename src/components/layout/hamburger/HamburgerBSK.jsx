import { CiLogout } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import MenuBSK from './MenuBSK'
const HamburgerBSK = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='#fff' /> : <CiLogout color='#fff' />}
			</button>
			<MenuBSK isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default HamburgerBSK

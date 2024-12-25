import cn from 'clsx'
import { useCheckToken } from '../../hooks/useCheckToken'
import styles from './Layout.module.scss'
import Header from './header/Header'
import HeaderBSK from './headerbsk/HeaderBSK'
const Layout = ({ children, bgImage, heading = '', backLink = '/home' }) => {
	useCheckToken()
	return (
		<>
			<div>
				<HeaderBSK />
			</div>
			<section
				className={cn(styles.wrapper, {
					[styles.otherPage]: !!heading
				})}
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				<Header backLink={backLink} />
				{heading && <h1 className={styles.heading}>{heading}</h1>}

				{children && <div>{children}</div>}
			</section>
		</>
	)
}

export default Layout

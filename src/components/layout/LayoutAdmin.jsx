import cn from 'clsx'
import { useCheckToken } from '../../hooks/useCheckToken'
import styles from './Layout.module.scss'
import HeaderAdmin from './header/HeaderAdmin'
import HeaderBSK from './headerbsk/HeaderBSK'
const LayoutAdmin = ({
	children,
	bgImage,
	heading = '',
	backLink = '/users-all-key'
}) => {
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
				<HeaderAdmin backLink={backLink} />
				{heading && <h1 className={styles.heading}>{heading}</h1>}

				{children && <div>{children}</div>}
			</section>
		</>
	)
}

export default LayoutAdmin

import cn from 'clsx'
import { useCheckToken } from '../../hooks/useCheckToken'
import styles from './Layout.module.scss'
import HeaderCoach from './header/HeaderCoach'
import HeaderBSK from './headerbsk/HeaderBSK'
const LayoutCoach = ({
	children,
	bgImage,
	heading = '',
	backLink = '/coach'
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
				<HeaderCoach backLink={backLink} />
				{heading && <h1 className={styles.heading}>{heading}</h1>}

				{children && <div>{children}</div>}
			</section>
		</>
	)
}

export default LayoutCoach

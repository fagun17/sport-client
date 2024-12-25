import cn from 'clsx'
import styles from './Button.coach.module.scss'
const ButtonCoach = ({ children, clickHandler = null, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default ButtonCoach

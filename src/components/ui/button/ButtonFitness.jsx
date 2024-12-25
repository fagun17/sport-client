import cn from 'clsx'
import styles from './Button.module.scss'
const ButtonFitness = ({ children, clickHandler = null, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.buttons, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default ButtonFitness

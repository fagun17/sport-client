import cn from 'clsx'
import styles from './Button.coach.module.scss'
const ButtonRecommendation = ({
	children,
	clickHandler = null,
	size = 'xl'
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.buttonrecom, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default ButtonRecommendation

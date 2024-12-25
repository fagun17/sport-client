import styles from '../detail/Tournament.module.scss'

const TournamentItemAdmin = ({ tournament, mutate }) => {
	return (
		<div className={styles.item}>
			<button
				aria-label='Создана новая тренировка'
				onClick={() => mutate(tournament.id)}
			>
				<span>
					{tournament.name} #{tournament.id}
				</span>
				<span>{tournament.tabNumber}</span>
			</button>
		</div>
	)
}

export default TournamentItemAdmin

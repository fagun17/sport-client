import styles from '../detail/Tournament.module.scss'

const TournamentItemCoach = ({ tournament, mutate }) => {
	return (
		<div className={styles.item}>
			<button
				aria-label='Создана новая тренировка'
				onClick={() => mutate(tournament.id)}
			>
				<span>
					#{tournament.id} {tournament.name}
				</span>
				<span>{tournament.tabNumber}</span>
			</button>
		</div>
	)
}

export default TournamentItemCoach

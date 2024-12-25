import styles from './Table.module.scss'
const TournamentItemDelete = ({ tournament, mutate }) => {
	const handleReloadClick = () => {
		window.location.reload()
	}
	return (
		<tr key={tournament.id}>
			<td>{tournament.name}</td>

			<td>
				<button
					style={{ cursor: 'pointer', fontSize: 15 }}
					type='submit'
					className={styles.delete}
					onClick={() => mutate(tournament.id)}
				>
					Удалить спортивное событие
				</button>
			</td>
			<td>
				<button
					style={{ cursor: 'pointer', fontSize: 15 }}
					type='submit'
					className={styles.delete}
					onClick={handleReloadClick}
				>
					Обновить поле
				</button>
			</td>
		</tr>
	)
}

export default TournamentItemDelete

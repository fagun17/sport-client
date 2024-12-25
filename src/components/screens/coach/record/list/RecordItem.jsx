import styles from './Table.module.scss'
const RecordItem = ({ record, mutate }) => {
	const handleReloadClick = () => {
		window.location.reload()
	}
	return (
		<tr>
			<td>{record.dateTime}</td>
			<td>{record.lastNames}</td>
			<td>{record.names}</td>

			<td>{record.nameNames}</td>
			<td>{record.viewHalls}</td>
			<td>{record.typeWorkouts}</td>
			<td>{record.coaches}</td>
			<td>{record.viewWorkouts}</td>

			<td>{record.timeDate}</td>
			<td>
				<button
					type='submit'
					className={styles.delete}
					onClick={() => mutate(record.id)}
				>
					Удалить запись
				</button>
			</td>
			<td>
				<form>
					<button
						style={{ width: 150 }}
						type='submit'
						className={styles.delete}
						onClick={handleReloadClick}
					>
						Обновить поле
					</button>
				</form>
			</td>
		</tr>
	)
}

export default RecordItem

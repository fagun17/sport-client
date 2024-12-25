import styles from './Table.module.scss'
const RecordItemAdmin = ({ record, mutate }) => {
	return (
		<tr>
			<td style={{}}>{record.dateTime}</td>
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
		</tr>
	)
}

export default RecordItemAdmin

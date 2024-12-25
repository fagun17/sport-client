import styles from '../ExerciseLog.module.scss'

const TableHeader = () => {
	return (
		<div className={styles.row}>
			<div>
				<span>Предыдущее</span>
			</div>
			<div>
				<span>Вес и повторения</span>
			</div>
			<div>
				<span>Выполнено</span>
			</div>
		</div>
	)
}

export default TableHeader

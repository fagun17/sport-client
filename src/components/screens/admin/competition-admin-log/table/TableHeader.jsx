import styles from '../CompetitionLog.module.scss'

const TableHeader = () => {
	return (
		<div className={styles.row}>
			<div>
				<span>Предыдущая статистика команд/участников</span>
			</div>
			<div>
				<span>Команда 1/ Команда 2</span>
			</div>
			<div>
				<span>Турнир завершен</span>
			</div>
		</div>
	)
}

export default TableHeader

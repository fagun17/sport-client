import styles from '../record-admin/list/Table.module.scss'
const UserTournament = ({ register, mutate }) => {
	const handleReloadClick = () => {
		window.location.reload()
	}
	return (
		<tr>
			<td>{register.id}</td>
			<td>{register.fullName}</td>
			<td>{register.tabNumber}</td>
			<td>
				<button
					style={{ fontSize: 15 }}
					type='submit'
					className={styles.delete}
					onClick={() => mutate(register.id)}
				>
					Снять с регистрации
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

export default UserTournament

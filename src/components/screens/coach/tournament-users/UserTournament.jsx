import styles from '../record/list/Table.module.scss'
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
				<form>
					<button
						style={{ fontSize: 15 }}
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

export default UserTournament

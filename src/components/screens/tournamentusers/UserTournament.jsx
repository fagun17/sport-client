const UserTournament = ({ register }) => {
	return (
		<tr>
			<td>{register.id}</td>
			<td>{register.fullName}</td>
			<td>{register.tabNumber}</td>
		</tr>
	)
}

export default UserTournament

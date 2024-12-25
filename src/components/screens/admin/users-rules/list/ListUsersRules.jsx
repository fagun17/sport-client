import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../../app.constants'
import LayoutAdmin from '../../../../layout/LayoutAdmin'
import Loader from '../../../../ui/Loader'
import Alert from '../../../../ui/allert/Alert'
import styles from '../../../../ui/field/Field.module.scss'
import './Table.module.scss'
import UserItemAdmin from './UserItemAdmin'
import { useUsers } from './useUsers'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const ListUsersRules = () => {
	const { data, isSuccess, mutate, isLoading, isSuccessMutate, error } =
		useUsers()

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	const [users, setUsers] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/users`)
			setUsers(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredUsers = users.filter(usering => {
		const regex = new RegExp(search, 'gi')
		return usering.email.match(regex)
	})

	return (
		<div>
			<LayoutAdmin
				bgImage='/images/admin.jpg'
				heading='Панель управления'
				backLink='/admin-records'
			/>
			<h4>
				Роль "Тренер" - тренер и наставник, роль "Юзер" - пользователь
				приложения, роль "Админ" - администратор спортивного приложения
			</h4>
			<div style={{ overflowX: 'auto' }}>
				<div style={{ width: '1800px' }}>
					<div className='app-container'>
						{isSuccess && (
							<div style={{ marginTop: 10 }}>
								<input
									className={styles.input}
									placeholder='Найти пользователя...'
									onChange={handleSearch}
									onClick={() => fetchData()}
								></input>
								{error && <Alert type='error' text={error} />}
								{isSuccessMutate && <Alert text='Пользователь удален' />}
								{isLoading && <Loader />}

								<table>
									<thead>
										<tr style={{ fontSize: 20, textAlign: 'center' }}>
											<th>Email/имя пользователя</th>
											<th>Роль</th>
											<th>Опции</th>
											<th>Обновление</th>
										</tr>
									</thead>

									<tbody>
										{filteredUsers.map(user => (
											<UserItemAdmin
												key={user.id}
												user={user}
												mutate={mutate}
											/>
										))}
									</tbody>
								</table>
							</div>
						)}

						{isSuccess && data?.length === 0 && (
							<Alert type='warning' text='Записи в зал не найдены' />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListUsersRules

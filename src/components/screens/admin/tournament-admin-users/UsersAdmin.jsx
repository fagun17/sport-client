import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../app.constants'
import LayoutAdmin from '../../../layout/LayoutAdmin'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import styles from '../../../ui/field/Field.module.scss'
import UserTournament from './UserTournament'
import { useUsers } from './useUsers'
//
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const TournamentsAdminREG = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
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

	const [registers, setRegisters] = useState([])

	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/registrations`)
			setRegisters(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredRegisters = registers.filter(register => {
		const regex = new RegExp(search, 'gi')
		return register.fullName.match(regex) || register.tabNumber.match(regex)
	})

	return (
		<>
			<LayoutAdmin
				bgImage='/public/images/reg_users.jpg'
				heading='Зарегистрированные в спортивных событиях участники'
				backLink='/users-all-key'
			/>
			<div style={{ overflowX: 'auto' }}>
				<div style={{ width: '2000px' }}>
					<div className='app-container'>
						<h1>Участники</h1>

						<input
							className={styles.input}
							placeholder='Найти сотрудника...'
							onChange={handleSearch}
							onClick={() => fetchData()}
						></input>
						{error && <Alert type='error' text={error} />}
						{isSuccessMutate && <Alert text='Регистрация успешно удалена' />}
						{isLoading && <Loader />}
						{isSuccess && (
							<table>
								<thead>
									<th>Регистрационный номер</th>
									<th>ФИО студента</th>
									<th>Табельный номер</th>
									<th>Опции</th>
									<th>Обновление таблицы</th>
								</thead>
								{filteredRegisters.map(register => (
									<UserTournament
										key={register.id}
										register={register}
										mutate={mutate}
									/>
								))}
							</table>
						)}

						{isSuccess && data?.length === 0 && (
							<Alert
								type='warning'
								text='Зарегистрированные сотрудники не найдены...'
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default TournamentsAdminREG

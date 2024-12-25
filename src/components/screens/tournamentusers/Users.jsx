import Loader from '../../ui/Loader'
import Alert from '../../ui/allert/Alert'

import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../app.constants'
import Layout from '../../layout/Layout'
import styles from '../tournaments/detail/Tournament.module.scss'
import UserTournament from './UserTournament'
import { useUsers } from './useUsers'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const RegUsers = () => {
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
	const [requestError, setRequestError] = useState()
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
			<Layout
				bgImage='/images/gazon1.jpeg'
				heading='Зарегистрированные в мероприятиях сотрудники'
			/>

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Tournament log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						<input
							className={styles.input}
							placeholder='Найти сотрудника...'
							onChange={handleSearch}
							onClick={() => fetchData()}
						></input>
						<thead>
							<th>Номер записи</th>
							<th>ФИО сотрудника</th>
							<th>Телеграм</th>
						</thead>

						{filteredRegisters.map(register => (
							<UserTournament
								key={register.id}
								register={register}
								mutate={mutate}
							/>
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Tournaments not found' />
				)}
			</div>
		</>
	)
}

export default RegUsers

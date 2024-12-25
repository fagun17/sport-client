import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../app.constants'
import LayoutCoach from '../../../layout/LayoutCoach'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import styles from '../../../ui/field/Field.module.scss'
import './Table.module.scss'
import TournamentItemDelete from './TournamentItem'
import { useTournamentDelete } from './useTournamentsDelete'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const ListTournamentsDeleteCoach = () => {
	const { data, isSuccess, mutate, isLoading, isSuccessMutate, error } =
		useTournamentDelete()

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	const [tournaments, setTournaments] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/tournaments`)
			setTournaments(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredDocuments = tournaments.filter(tournament => {
		const regex = new RegExp(search, 'gi')
		return tournament.name.match(regex)
	})

	return (
		<div>
			<LayoutCoach
				bgImage='/images/competition.jpg'
				heading='Удаление спортивных событий'
				backLink='/coach'
			/>
			<div style={{ overflowX: 'auto' }}>
				<div style={{ width: '2000px' }}>
					<div className='app-container'>
						{isSuccess && (
							<div style={{ marginTop: 10 }}>
								<input
									className={styles.input}
									placeholder='Найти спортивное событие...'
									onChange={handleSearch}
									onClick={() => fetchData()}
								></input>
								{error && <Alert type='error' text={error} />}
								{isSuccessMutate && (
									<Alert text='Спортивное событие успешно удалено' />
								)}
								{isLoading && <Loader />}

								<table>
									<thead>
										<tr>
											<th>Название спортивного события</th>
											<th>Опции</th>
											<th>Обновление таблицы</th>
										</tr>
									</thead>

									<tbody>
										{filteredDocuments.map(tournament => (
											<TournamentItemDelete
												key={tournament.id}
												tournament={tournament}
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

export default ListTournamentsDeleteCoach

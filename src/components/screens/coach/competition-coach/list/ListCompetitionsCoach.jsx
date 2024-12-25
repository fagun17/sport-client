import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../../app.constants'
import LayoutCoach from '../../../../layout/LayoutCoach'
import Loader from '../../../../ui/Loader'
import Alert from '../../../../ui/allert/Alert'
import styles from '../../../../ui/field/Field.module.scss'
import CompetitionItemAdmin from './CompetitionItemAdmin'
import './Table.module.scss'
import { useCompetitions } from './useCompetitions'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const ListCompetitionsCoach = () => {
	const { data, isSuccess, mutate, isLoading, isSuccessMutate, error } =
		useCompetitions()

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	const [competitions, setCompetitions] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/competitions`)
			setCompetitions(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredCompetitions = competitions.filter(competition => {
		const regex = new RegExp(search, 'gi')
		return competition.name.match(regex) || competition.data.match(regex)
	})

	return (
		<div>
			<LayoutCoach
				bgImage='/images/competitionvoleybal.jpg'
				heading='Соревнования'
				backLink='/coach'
			/>
			<div style={{ overflowX: 'auto' }}>
				<div style={{ width: '2000px' }}>
					<div className='app-container'>
						{isSuccess && (
							<div style={{ marginTop: 10 }}>
								<input
									className={styles.input}
									placeholder='Найти соревнование...'
									onChange={handleSearch}
									onClick={() => fetchData()}
								></input>
								{error && <Alert type='error' text={error} />}
								{isSuccessMutate && (
									<Alert text='Соревнование успешно удалено' />
								)}
								{isLoading && <Loader />}
								<table>
									<thead>
										<tr>
											<th>Номер соревнования</th>
											<th>Название соревнования</th>
											<th>Дата проведения</th>
											<th>Количество матчей/встреч</th>
											<th>Название команды 1</th>
											<th>Название команды 2</th>
											<th>Примечания/описания</th>
											<th>Лого</th>
											<th>Редактирование</th>

											<th>Опции</th>
											<th>Обновление</th>
										</tr>
									</thead>

									<tbody>
										{filteredCompetitions.map(competition => (
											<CompetitionItemAdmin
												key={competition.id}
												competition={competition}
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

export default ListCompetitionsCoach

import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../../app.constants'
import LayoutCoach from '../../../../layout/LayoutCoach'
import Loader from '../../../../ui/Loader'
import Alert from '../../../../ui/allert/Alert'
import styles from '../../../../ui/field/Field.module.scss'
import RecordItem from './RecordItem'
import './Table.module.scss'
import { useRecords } from './useRecords'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const ListRecords = () => {
	const { data, isSuccess, mutate, isLoading, isSuccessMutate, error } =
		useRecords()

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	const [records, setRecords] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/records`)
			setRecords(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredDocuments = records.filter(contract => {
		const regex = new RegExp(search, 'gi')
		return (
			contract.dateTime.match(regex) ||
			contract.lastNames.match(regex) ||
			contract.names.match(regex) ||
			contract.nameNames.match(regex) ||
			contract.viewHalls.match(regex) ||
			contract.typeWorkouts.match(regex) ||
			contract.coaches.match(regex) ||
			contract.viewWorkouts.match(regex) ||
			contract.timeDate.match(regex)
		)
	})

	return (
		<div>
			<LayoutCoach
				bgImage='/images/sportHall.jpg'
				heading='Записи в зал'
				backLink='/coach'
			/>
			<div style={{ overflowX: 'auto' }}>
				<div style={{ width: '2000px' }}>
					<div className='app-container'>
						{isSuccess && (
							<div style={{ marginTop: 10 }}>
								<input
									className={styles.input}
									placeholder='Найти запись в зал...'
									onChange={handleSearch}
									onClick={() => fetchData()}
								></input>
								{error && <Alert type='error' text={error} />}
								{isSuccessMutate && (
									<Alert text='Запись в зал успешно удалена' />
								)}
								{isLoading && <Loader />}
								<h3>Отсортировать записи по дате...</h3>
								<input
									type='date'
									className={styles.input}
									placeholder='Отсортировать по дате...'
									onChange={handleSearch}
									onClick={() => fetchData()}
								></input>
								<table>
									<thead>
										<tr>
											<th>Дата тренировки</th>
											<th>Фамилия</th>
											<th>Имя</th>
											<th>Отчество</th>
											<th>Спортивный зал</th>
											<th>Тип тренировки</th>
											<th>Наличие тренера</th>
											<th>Вид тренировки</th>

											<th>Время тренировки</th>

											<th>Опции</th>
											<th>Обновить поле таблицы</th>
										</tr>
									</thead>

									<tbody>
										{filteredDocuments.map(record => (
											<RecordItem
												key={record.id}
												record={record}
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

export default ListRecords

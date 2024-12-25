import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useCallback, useState } from 'react'
import { TOKEN } from '../../../app.constants.js'
import style from './Health.module.scss'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const RecomFree = () => {
	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)
	const [registrations, setRegistrations] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const registration = await axios.get(`${API_URL}/registrations`)
			setRegistrations(registration.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const registers = registrations
	console.log(registers)

	const handleQueryChange = event => {
		setSortBy(event.target.value)
	}

	const handleFormSubmit = event => {
		event.preventDefault()
	}
	const [sortBy, setSortBy] = useState('')
	const [sortedData, setSortedData] = useState(registrations)

	const sortDataByPropertyCC = () => {
		const sorted = [...registrations].sort((a, b) => b.prioritet - a.prioritet)
		fetchData()
		setSortBy('prioritet')
		setSortedData(sorted)
	}
	const sortDataByPropertyA = () => {
		const sorted = [...registrations].sort((a, b) => b.height - a.height)
		fetchData()
		setSortBy('height')
		setSortedData(sorted)
	}

	const sortDataByPropertyB = () => {
		const sorted = [...registrations].sort((a, b) => b.scores - a.scores)
		fetchData()
		setSortBy('scores')
		setSortedData(sorted)
	}

	return (
		<div>
			<h2>Рекомендуемые студенты к участию в соревнованиях:</h2>
			<button className={style.pay} onClick={sortDataByPropertyCC}>
				Лучшие участники
			</button>
			<button className={style.pay} onClick={sortDataByPropertyB}>
				Футбол
			</button>
			<button className={style.pay} onClick={sortDataByPropertyA}>
				Волейбол
			</button>
			<button className={style.pay} onClick={sortDataByPropertyB}>
				Забеги
			</button>

			<button className={style.pay} onClick={sortDataByPropertyA}>
				Баскетбол
			</button>

			<th>№</th>
			<th>ФИО студента</th>
			<th>Номер зачетки</th>
			<th>рост студента</th>
			<th>Баллы за активность</th>
			<th>Приоритетность</th>
			{sortedData.map(item => (
				<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.fullName}</td>
					<td>{item.tabNumber}</td>
					<td>{item.height}</td>
					<td>{item.scores + 1}</td>
					<td>{item.prioritet}%</td>
				</tr>
			))}
		</div>
	)
}

export default RecomFree

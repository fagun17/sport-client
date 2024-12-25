import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { TOKEN } from '../../../../../app.constants'
import styles from './Table.module.scss'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const CompetitionItemAdmin = ({ competition, mutate }) => {
	const handleReloadClick = () => {
		window.location.reload()
	}

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)
	const [postData, setPostData] = useState({
		id: competition.id,
		name: '',
		times: 1,
		data: '',
		names: '',
		comandOne: '',
		comandTwo: ''
	})
	const [putData, setPutData] = useState({
		id: competition.id,
		name: '',
		times: 1,
		data: '',
		names: '',
		comandOne: '',
		comandTwo: ''
	})

	const handleInputChange = event => {
		setPostData({ ...postData, [event.target.name]: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		axios
			.put(`${API_URL}/competitions/${competition.id}`, {
				name: postData.name,
				times: postData.times,
				data: postData.data,
				names: postData.names,
				comandOne: postData.comandOne,
				comandTwo: postData.comandTwo
			})
			.then(response => {
				setPutData(response.data)
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
	return (
		<tr>
			<td style={{ textAlign: 'center', fontSize: 18 }}>{competition.id}</td>
			<td style={{ textAlign: 'center', fontSize: 18 }}>{competition.name}</td>
			<td style={{ textAlign: 'center', fontSize: 18 }}>{competition.data}</td>
			<td style={{ textAlign: 'center', fontSize: 18 }}>{competition.times}</td>
			<td style={{ textAlign: 'center', fontSize: 18 }}>
				{competition.comandOne}
			</td>
			<td style={{ textAlign: 'center', fontSize: 18 }}>
				{competition.comandTwo}
			</td>
			<td style={{ textAlign: 'center', fontSize: 18 }}>{competition.names}</td>
			<td>
				<img
					style={{ borderRadius: 10 }}
					src={import.meta.env.VITE_SERVER_URL + competition.iconSport}
					height='60'
					width='80'
					alt=''
					draggable={false}
				/>
			</td>
			<td>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							style={{ width: 200 }}
							className={styles.delete}
							type='text'
							name='name'
							placeholder='Изменить название соревнования...'
							value={postData.name}
							onChange={handleInputChange}
						/>

						<input
							style={{ width: 200 }}
							className={styles.delete}
							type='date'
							name='data'
							placeholder='Дата проведения соревнования...'
							value={postData.data}
							onChange={handleInputChange}
						/>
						<input
							style={{ width: 200 }}
							className={styles.delete}
							type='text'
							name='comandOne'
							placeholder='Название 1 команды...'
							value={postData.comandOne}
							onChange={handleInputChange}
						/>
						<input
							style={{ width: 200 }}
							className={styles.delete}
							type='text'
							name='comandTwo'
							placeholder='Название 2 команды...'
							value={postData.comandTwo}
							onChange={handleInputChange}
						/>

						<input
							style={{ width: 200 }}
							className={styles.delete}
							type='text'
							name='names'
							placeholder='Описание мероприятия...'
							value={postData.names}
							onChange={handleInputChange}
						/>

						<button
							style={{ width: 200, cursor: 'pointer', fontSize: 20 }}
							className={styles.delete}
							type='submit'
						>
							Обновить данные
						</button>
					</div>
				</form>
			</td>

			<td>
				<button
					style={{ cursor: 'pointer', fontSize: 15 }}
					type='submit'
					className={styles.delete}
					onClick={() => mutate(competition.id)}
				>
					Удалить соревнование
				</button>
			</td>
			<td style={{ textAlign: 'center' }}>
				<button
					className={styles.delete}
					style={{
						fontSize: 18,
						cursor: 'pointer',
						height: 85,
						width: 165,
						textAlign: 'center',
						borderRadius: 5
					}}
					onClick={handleReloadClick}
				>
					Обновить содержимое поля
				</button>
			</td>
		</tr>
	)
}

export default CompetitionItemAdmin

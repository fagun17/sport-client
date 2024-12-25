import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../../../app.constants'
import LayoutCoach from '../../../../layout/LayoutCoach'
import styles from '../detail/Tournament.module.scss'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const CompetitionUpdate = ({ competitionLog }) => {
	const navigation = useNavigate()

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
		id: '',
		name: '',
		times: 1,
		data: '',
		names: '',
		comandOne: '',
		comandTwo: ''
	})
	const [putData, setPutData] = useState({
		id: '',
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
			.put(`${API_URL}/competitions/${postData.id}`, {
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
		<>
			<LayoutCoach
				bgImage='/images/competitionvoleybal.jpg'
				heading='Редактировать соревнование'
				backLink='/tournaments-coach'
			/>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit}>
					<div>
						<h2 htmlFor='id'>Уникальный номер: </h2>
						<input
							className={styles.input}
							type='number'
							name='id'
							placeholder='Укажите номер редактируемого соревнования ...'
							value={postData.id}
							onChange={handleInputChange}
							required='required'
						/>
						<h2 htmlFor='id'>Название соревнования: </h2>
						<input
							className={styles.input}
							type='text'
							name='name'
							placeholder='Изменить название соревнования...'
							value={postData.name}
							onChange={handleInputChange}
						/>

						<h2 htmlFor='id'>Дата соревнования: </h2>
						<input
							className={styles.input}
							type='date'
							name='data'
							placeholder='Дата проведения соревнования...'
							value={postData.data}
							onChange={handleInputChange}
						/>

						<h2 htmlFor='id'>Описание: </h2>
						<input
							className={styles.input}
							type='text'
							name='names'
							placeholder='Примечания...'
							value={postData.names}
							onChange={handleInputChange}
						/>
						<h2 htmlFor='id'>Команда 1... </h2>
						<input
							className={styles.input}
							type='text'
							name='comandOne'
							placeholder='Команда 1...'
							value={postData.comandOne}
							onChange={handleInputChange}
						/>
						<h2 htmlFor='id'>Команда 2... </h2>
						<input
							className={styles.input}
							type='text'
							name='comandTwo'
							placeholder='Команда 2...'
							value={postData.comandTwo}
							onChange={handleInputChange}
						/>
					</div>
					<button
						style={{ fontSize: 20, cursor: 'pointer' }}
						className={styles.happy}
						type='submit'
					>
						Обновить данные
					</button>
				</form>
				<div className={styles.input}>
					<h1>Обновленные данные</h1>
					<h3>Название соревнования: {putData.name}</h3>
					<h3>Дата проведения соревнования: {putData.data}</h3>
					<h3>Описание: {putData.names}</h3>
					<h3>Команда 1: {putData.comandOne}</h3>
					<h3>Команда 2: {putData.comandTwo}</h3>
				</div>
			</div>
		</>
	)
}

export default CompetitionUpdate

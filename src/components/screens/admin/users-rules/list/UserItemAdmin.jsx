import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../../../app.constants'
import style from '../../../../ui/field/Field.module.scss'
import styles from './Table.module.scss'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const UserItemAdmin = ({ user, mutate }) => {
	const navigate = useNavigate()

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
		id: user.id,
		key2: ''
	})
	const [putData, setPutData] = useState({
		id: '',
		key2: ''
	})

	const handleInputChange = event => {
		setPostData({ ...postData, [event.target.name]: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		axios
			.put(`${API_URL}/users/${postData.id}`, {
				name: postData.name,
				email: postData.email,
				password: postData.password,
				key2: postData.key2
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
		<tr style={{ fontSize: 30 }}>
			<td style={{ fontSize: 30 }}>
				#{user.id} {user.email}
			</td>
			<td style={{ fontSize: 30 }}>{user.key2}</td>

			<td style={{ justifyContent: 'space-between', textAlign: 'center' }}>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							className={style.admin}
							type='text'
							name='key2'
							placeholder='Назначить роль ...'
							value={postData.key2}
							onChange={handleInputChange}
							required='required'
						/>
						<div>
							<button
								onClick={() => navigate('/users-all-key')}
								style={{
									fontSize: 20,
									cursor: 'pointer',
									height: 65,
									width: 265,
									textAlign: 'center'
								}}
								className={styles.delete}
							>
								Добавить роль
							</button>
						</div>
					</div>
				</form>
				<button
					style={{
						fontSize: 20,
						cursor: 'pointer',
						height: 65,
						width: 265,
						textAlign: 'center'
					}}
					className={styles.delete}
					onClick={() => mutate(user.id)}
				>
					Удалить пользователя
				</button>
				<div className={styles.input}>
					<h3>Обновление роли: {putData.key2}</h3>
				</div>
			</td>
			<td style={{ textAlign: 'center' }}>
				<button
					className={styles.delete}
					style={{
						fontSize: 20,
						cursor: 'pointer',
						height: 65,
						width: 265,
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

export default UserItemAdmin

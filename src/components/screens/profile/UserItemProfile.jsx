import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { TOKEN, URl } from '../../../app.constants'
import style from '../../ui/field/Field.module.scss'
import styles from '../admin/users-rules/list/Table.module.scss'
const UserItemProfile = ({ data, mutate }) => {
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
		id: data.id,
		name: ''
	})
	const [putData, setPutData] = useState({
		id: data.id,
		name: ''
	})

	const handleInputChange = event => {
		setPostData({ ...postData, [event.target.name]: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		axios
			.put(`${URl}/users/${data.id}`, {
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
		<tr style={{ fontSize: 20 }}>
			<td>{data.name} </td>

			<td style={{ justifyContent: 'space-between' }}>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							className={style.admin}
							type='text'
							name='name'
							placeholder='Имя ...'
							value={postData.name}
							onChange={handleInputChange}
							required='required'
						/>
						<button
							style={{ fontSize: 20, cursor: 'pointer' }}
							className={styles.delete}
							type='submit'
						>
							Обновить данные
						</button>
					</div>
					<></>
				</form>
			</td>
		</tr>
	)
}

export default UserItemProfile

import { $axios } from '../../api'

export const USERS = '/users'

class UserService {
	async getAll() {
		return $axios.get(USERS)
	}

	async update(id, body) {
		return $axios.put(`${USERS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${USERS}/${id}`)
	}
}

export default new UserService()

import { $axios } from '../api'

const USERS = '/users'
class AdminService {
	async getAdmin() {
		return $axios.get(`${USERS}/admin`)
	}
}

export default new AdminService()

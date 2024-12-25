import { $axios } from '../../api'

export const REGISTERS = '/registrations'

class RegisterService {
	async getAll() {
		return $axios.get(REGISTERS)
	}
	async getById(id) {
		return $axios.get(`${REGISTERS}/${id}`)
	}

	async create(body) {
		return $axios.post(REGISTERS, body)
	}

	async update(id, body) {
		return $axios.put(`${REGISTERS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${REGISTERS}/${id}`)
	}
}

export default new RegisterService()

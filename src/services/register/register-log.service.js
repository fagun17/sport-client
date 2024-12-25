import { $axios } from '../../api'

import REGISTERS from './register.service'

const LOG = `${REGISTERS}/log`

class RegisterLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	// "weight": 10,
	// "repeat": 20,
	// "isCompleted": true,
	async updateTime(timeId, body) {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	}

	// 	"isCompleted": true
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new RegisterLogService()

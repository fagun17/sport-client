import { $axios } from '../../api'

import { COMPETITIONS } from './competition.service'

const LOG = `${COMPETITIONS}/log`

class CompetitionLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(competitionId) {
		return $axios.post(`${LOG}/${competitionId}`)
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

export default new CompetitionLogService()

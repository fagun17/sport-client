import { $axios } from '../../api'

export const COMPETITIONS = '/competitions'

class CompetitionService {
	async getAll() {
		return $axios.get(COMPETITIONS)
	}

	// name, times, iconPath
	async create(body) {
		return $axios.post(COMPETITIONS, body)
	}

	async update(id, body) {
		return $axios.put(`${COMPETITIONS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${COMPETITIONS}/${id}`)
	}
}

export default new CompetitionService()

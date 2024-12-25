import { $axios } from '../../api'

export const TOURNAMENTS = '/tournaments'

class TournamentService {
	async getAll() {
		return $axios.get(TOURNAMENTS)
	}

	async getById(id) {
		return $axios.get(`${TOURNAMENTS}/${id}`)
	}

	// name, exerciseIds
	async create(body) {
		return $axios.post(TOURNAMENTS, body)
	}

	async update(id, body) {
		return $axios.put(`${TOURNAMENTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${TOURNAMENTS}/${id}`)
	}
}

export default new TournamentService()

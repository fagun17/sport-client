import { $axios } from '../../api'
import { TOURNAMENTS } from './tournament.service'

const LOG = `${TOURNAMENTS}/log`

class TournamentLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(tournamentId) {
		return $axios.post(`${LOG}/${tournamentId}`)
	}

	async complete(id) {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}

export default new TournamentLogService()

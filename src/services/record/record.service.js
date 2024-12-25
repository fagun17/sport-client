import { $axios } from '../../api'

export const RECORDS = '/records'

class RecordService {
	async getAll() {
		return $axios.get(RECORDS)
	}

	async create(body) {
		return $axios.post(RECORDS, body)
	}

	async update(id, body) {
		return $axios.put(`${RECORDS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${RECORDS}/${id}`)
	}
}

export default new RecordService()

import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { TOKEN } from '../../../../app.constants'
import Layout from '../../../layout/Layout'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import styles from '../detail/Tournament.module.scss'
import TournamentItem from './TournamentItem'
import { useTournaments } from './useTournaments'
const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const ListTournaments = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useTournaments()

	axios.interceptors.request.use(
		config => {
			config.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	const [tournaments, setTournaments] = useState([])
	const [requestError, setRequestError] = useState()
	const fetchData = useCallback(async () => {
		try {
			const result = await axios.get(`${API_URL}/tournaments`)
			setTournaments(result.data)
		} catch (err) {
			setRequestError(err.message)
		}
	})

	const [search, setSearch] = useState('')
	const handleSearch = event => {
		setSearch(event.target.value)
	}
	const filteredTournaments = tournaments.filter(tournament => {
		const regex = new RegExp(search, 'gi')
		return tournament.name.match(regex)
	})

	return (
		<>
			<Layout
				bgImage='/public/images/competitions.jpg'
				heading='Спортивные события'
			/>

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Лог турнира создан' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						<input
							className={styles.search}
							placeholder='Найти спортивное события...'
							onChange={handleSearch}
							onClick={() => fetchData()}
						></input>

						{filteredTournaments.map(tournament => (
							<TournamentItem
								key={tournament.id}
								tournament={tournament}
								mutate={mutate}
							/>
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Спортивных событий не найдено' />
				)}
			</div>
		</>
	)
}

export default ListTournaments

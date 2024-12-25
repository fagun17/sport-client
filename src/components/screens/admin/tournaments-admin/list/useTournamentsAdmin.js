import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import TournamentLogService from '../../../../../services/tournament/tournament-log.service'
import TournamentService from '../../../../../services/tournament/tournament.service'

export const useTournamentsAdmin = () => {
	const { data, isSuccess } = useQuery(
		['get tournaments'],
		() => TournamentService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const navigate = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new tournament log'],
		tournamentId => TournamentLogService.create(tournamentId),
		{
			onSuccess({ data }) {
				navigate(`/tournament-admin/${data.id}`)
			}
		}
	)

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}

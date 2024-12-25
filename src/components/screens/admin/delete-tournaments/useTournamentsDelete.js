import { useMutation, useQuery } from '@tanstack/react-query'
import TournamentService from '../../../../services/tournament/tournament.service'
export const useTournamentDelete = () => {
	const { data, isSuccess } = useQuery(
		['get tournaments'],
		() => TournamentService.getAll(),

		{
			select: ({ data }) => data
		}
	)

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['delete tournament'],
		tournamentId => TournamentService.delete(tournamentId),
		{
			select: ({ data }) => data
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

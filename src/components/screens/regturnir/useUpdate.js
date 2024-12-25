import { useMutation } from '@tanstack/react-query'
import CompetitionService from '../../../services/competition/competition.service'
export const useTurnirs = () => {
	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['put competition'],
		competitionId => CompetitionService.put(competitionId),
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

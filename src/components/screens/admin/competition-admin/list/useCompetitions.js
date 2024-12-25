import { useMutation, useQuery } from '@tanstack/react-query'
import CompetitionService from '../../../../../services/competition/competition.service'
export const useCompetitions = () => {
	const { data, isSuccess } = useQuery(
		['get competitions'],
		() => CompetitionService.getAll(),

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
		['delete competition'],
		competitionId => CompetitionService.delete(competitionId),
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

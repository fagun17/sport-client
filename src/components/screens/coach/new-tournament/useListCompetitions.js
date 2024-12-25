import { useQuery } from '@tanstack/react-query'
import CompetitionService from '../../../../services/competition/competition.service'

export const useListCompetitions = () =>
	useQuery(['list competitions'], () => CompetitionService.getAll(), {
		select: ({ data }) => data
	})

import { useQuery } from '@tanstack/react-query'

import TournamentService from '../../../services/tournament/tournament.service'

export const useListTournaments = () =>
	useQuery(['list tournaments'], () => TournamentService.getAll(), {
		select: ({ data }) => data
	})

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import CompetitionLogService from '../../../../../services/competition/competition-log.service'

export const useCompleteLogAdmin = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const navigate = useNavigate()

	const { mutate, error: errorCompleted } = useMutation(
		['complete log'],
		body => CompetitionLogService.complete(id, body),
		{
			onSuccess: ({ data }) => {
				navigate(`/tournament-admin/${data.tournamentLogId}`)
			}
		}
	)

	return { completeLog: mutate, errorCompleted }
}

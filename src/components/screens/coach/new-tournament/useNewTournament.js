import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import TournamentService from '../../../../services/tournament/tournament.service'

export const useNewTournament = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create tournament'],
		body => TournamentService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					competitionIds: [],
					registerIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			competitionIds: data.competitionIds.map(ex => ex.value),
			registerIds: data.registerIds.map(ex => ex.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}),
		[errors, isSuccess, error, isLoading]
	)
}

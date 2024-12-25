import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import RegisterService from '../../../services/register/register.service'

export const useNewRegister = () => {
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
		['create register'],
		body => RegisterService.create(body),
		{
			onSuccess: () => {
				reset({
					fullName: '',
					tabNumber: '',
					scores: 1,
					height: 0,
					prioritet: 0,
					tournamentIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({
			fullName: data.fullName,
			tabNumber: data.tabNumber,
			scores: data.scores,
			height: data.height,
			prioritet: data.prioritet,
			tournamentIds: data.tournamentIds.map(ex => ex.value)
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

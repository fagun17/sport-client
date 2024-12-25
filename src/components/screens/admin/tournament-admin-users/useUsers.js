import { useMutation, useQuery } from '@tanstack/react-query'
import RegisterService from '../../../../services/register/register.service'
export const useUsers = () => {
	const { data, isSuccess } = useQuery(
		['get registers'],
		() => RegisterService.getAll(),

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
		tournamentId => RegisterService.delete(tournamentId),
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

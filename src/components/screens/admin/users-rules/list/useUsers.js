import { useMutation, useQuery } from '@tanstack/react-query'
import UserService from '../../../../../services/user-rules/user-rules.service'
export const useUsers = () => {
	const { data, isSuccess } = useQuery(
		['get users'],
		() => UserService.getAll(),

		{
			select: ({ data }) => data
		}
	)

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(['delete user'], userId => UserService.delete(userId), {
		select: ({ data }) => data
	})

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}

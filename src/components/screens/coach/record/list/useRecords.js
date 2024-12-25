import { useMutation, useQuery } from '@tanstack/react-query'
import RecordService from '../../../../../services/record/record.service'
export const useRecords = () => {
	const { data, isSuccess } = useQuery(
		['get records'],
		() => RecordService.getAll(),

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
		['delete record'],
		recordId => RecordService.delete(recordId),
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

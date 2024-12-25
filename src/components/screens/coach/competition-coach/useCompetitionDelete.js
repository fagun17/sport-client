import { useQuery } from '@tanstack/react-query'
import RecordService from '../../../../../../services/record/record.service'

export const useRecordsAdmin = () => {
	const { data, isSuccess } = useQuery(
		['get records'],
		() => RecordService.delete(),

		{
			select: ({ data }) => data
		}
	)

	return { data, isSuccess }
}

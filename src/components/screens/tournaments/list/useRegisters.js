import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import RegisterService from '../../../../services/register/register.service'
const { id } = useParams()

export const useRegisters = () => {
	const { datas, isSuccessic } = useQuery(
		['get register'],
		() => RegisterService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	return {
		datas,
		isSuccessic
	}
}

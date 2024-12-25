import { useQuery } from '@tanstack/react-query'

import RegisterService from '../../../../services/register/register.service'

export const useListRegisters = () =>
	useQuery(['list registers'], () => RegisterService.getAll(), {
		select: ({ data }) => data
	})

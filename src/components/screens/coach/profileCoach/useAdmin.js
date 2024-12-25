import { useQuery } from '@tanstack/react-query'

import AdminService from '../../../../services/admin.service'

export const useAdmin = () => {
	return useQuery(['get admin'], () => AdminService.getAdmin(), {
		select: ({ data }) => data
	})
}

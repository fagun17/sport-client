import { useQuery } from '@tanstack/react-query'

import ExerciseService from '../../../../services/exercise/exercise.service'

export const useListExercisesCoach = () =>
	useQuery(['list exercises'], () => ExerciseService.getAll(), {
		select: ({ data }) => data
	})

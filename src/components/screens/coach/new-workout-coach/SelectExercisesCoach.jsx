import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import Loader from '../../../ui/Loader'

import { useListExercisesCoach } from './useListExercisesCoach'

const SelectExercisesCoach = ({ control }) => {
	const { data, isLoading } = useListExercisesCoach()

	if (isLoading) return <Loader />

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => {
				console.log(value)
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Упражнения...'
						title='Exercises'
						options={data.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
						isMulti
					/>
				)
			}}
		/>
	)
}

export default SelectExercisesCoach

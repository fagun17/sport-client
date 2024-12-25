import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import Loader from '../../../ui/Loader'

import { useListCompetitions } from './useListCompetitions'

const SelectCompetitions = ({ control }) => {
	const { data, isLoading } = useListCompetitions()

	if (isLoading) return <Loader />

	return (
		<Controller
			name='competitionIds'
			control={control}
			render={({ field: { value, onChange } }) => {
				console.log(value)
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Соревнования...'
						title='Competition'
						options={data.map(competition => ({
							value: competition.id,
							label: competition.name
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

export default SelectCompetitions

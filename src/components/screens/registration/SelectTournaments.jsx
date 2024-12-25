import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import Loader from '../../ui/Loader'

import { useListTournaments } from './useListTournaments'

const SelectTournaments = ({ control }) => {
	const { data, isLoading } = useListTournaments()

	if (isLoading) return <Loader />

	return (
		<Controller
			name='tournamentIds'
			control={control}
			render={({ field: { value, onChange } }) => {
				console.log(value)
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Выберите спортивное событие...'
						title='Tournament'
						options={data.map(tournament => ({
							value: tournament.id,
							label: tournament.name
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

export default SelectTournaments

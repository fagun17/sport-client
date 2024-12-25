import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import Loader from '../../../ui/Loader'

import { useListRegisters } from './useListRegisters'

const SelectRegisters = ({ control }) => {
	const { data, isLoading } = useListRegisters()

	if (isLoading) return <Loader />

	return (
		<Controller
			name='registerIds'
			control={control}
			defaultValue={[]}
			render={({ field: { value, onChange } }) => {
				console.log(value)
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Зарегистрированные участники...'
						title='Register'
						options={data.map(register => ({
							value: register.id,
							label: register.fullName
						}))}
						value={value}
						onChange={onChange}
						isMulti
						isClearable // Добавлено для возможности о
					/>
				)
			}}
		/>
	)
}

export default SelectRegisters

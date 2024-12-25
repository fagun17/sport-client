import { useState } from 'react'
import styles from '../field/Field.module.scss'
const SelectSport = ({ register, name, error, ...rest }) => {
	const [valueSelect, setValueSelect] = useState('легкая атлетика')
	const handleSelect = event => {
		setValueSelect(event.target.value)
	}
	return (
		<div style={{ marginBottom: '1rem' }}>
			<select
				{...register(name)}
				{...rest}
				className={styles.select}
				value={valueSelect}
				onChange={handleSelect}
			>
				<option value='Легкая атлетика'>Легкая атлетика</option>
				<option value='Футбол'>Футбол</option>
				<option value='Волейбол'>Волейбол</option>
				<option value='Баскетбол'>Баскетбол</option>
				<option value='Велоспорт'>Велоспорт</option>
				<option value='Настольный теннис'>Настольный теннис</option>
			</select>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default SelectSport

import { useState } from 'react'
import styles from '../field/Field.module.scss'
const SelectTrain = ({ register, name, error, ...rest }) => {
	const [valueSelect, setValueSelect] = useState('тренажерный')
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
				<option value='Индивидуальный'>Индивидуальный</option>
				<option value='Групповой'>Групповой</option>
			</select>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default SelectTrain

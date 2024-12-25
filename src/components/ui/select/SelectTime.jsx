import { useState } from 'react'
import styles from '../field/Field.module.scss'
const SelectTime = ({ register, name, error, ...rest }) => {
	const [valueSelect, setValueSelect] = useState('09:00')
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
				<option value='10:00'>10:00</option>
				<option value='11:00'>11:00</option>
				<option value='12:00'>12:00</option>
				<option value='13:00'>13:00</option>
				<option value='14:00'>14:00</option>
				<option value='15:00'>15:00</option>
				<option value='16:00'>16:00</option>
				<option value='17:00'>17:00</option>
				<option value='18:00'>18:00</option>
				<option value='19:00'>19:00</option>
				<option value='20:00'>20:00</option>
				<option value='21:00'>21:00</option>
			</select>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default SelectTime

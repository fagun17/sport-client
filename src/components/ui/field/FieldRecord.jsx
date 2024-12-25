import styles from './Field.module.scss'

const FieldRecord = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input {...register(name, options)} {...rest} className={styles.select} />
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default FieldRecord

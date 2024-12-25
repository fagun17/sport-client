import cn from 'clsx'

import styles from '../CompetitionLog.module.scss'

const TableRow = ({ item, getState, onChangeState, toggleTime }) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevComandOne}`}
			>
				<input type='number' defaultValue={item.prevComandOne} disabled />
				<i>Участник/команда голы {item.isCompleted ? '' : ' '}</i>
				<input type='number' defaultValue={item.prevComandTwo} disabled />
			</div>

			<div key={`ComandOneComandTwo ${item.id}/${item.comandOne}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					value={getState(item.id, 'comandOne')}
					onChange={e => onChangeState(item.id, 'comandOne', e.target.value)}
					disabled={item.isCompleted}
				/>
				<i>Участник/команда голы {item.isCompleted ? '' : ' '}</i>
				<input
					type='number'
					value={getState(item.id, 'comandTwo')}
					onChange={e => onChangeState(item.id, 'comandTwo', e.target.value)}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					src={
						getState(item.id, 'isCompleted')
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					onClick={() => {
						toggleTime(item.id, !getState(item.id, 'isCompleted'))
					}}
				/>
			</div>
		</div>
	)
}

export default TableRow

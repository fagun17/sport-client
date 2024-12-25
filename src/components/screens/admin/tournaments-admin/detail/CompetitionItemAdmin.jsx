import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './Tournament.module.scss'

const CompetitionItemAdmin = ({ competitionLog }) => {
	const navigation = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: competitionLog.isCompleted
			})}
		>
			<button
				aria-label='Move to competition'
				onClick={() => navigation(`/competition-admin/${competitionLog.id}`)}
			>
				<span>
					<h1 style={{ color: '#24CAD4', fontSize: 24 }}>
						{'Название соревнования: '}
					</h1>
					<h3>{competitionLog.competition.name} </h3>
					<h1 style={{ color: '#24CAD4', fontSize: 24 }}>
						{'Номер соревнования: '}
					</h1>
					<h3>{competitionLog.competition.id} </h3>
					<h1 style={{ color: '#24CAD4', fontSize: 24 }}>
						{'Дата проведения соревнования: '}
					</h1>
					<h3>{competitionLog.competition.data} </h3>
					<h1 style={{ color: '#24CAD4', fontSize: 24 }}>{'Примечания:'} </h1>
					<h3>{competitionLog.competition.names}</h3>
				</span>

				<img
					style={{ borderRadius: 10 }}
					src={
						import.meta.env.VITE_SERVER_URL +
						competitionLog.competition.iconSport
					}
					height='234'
					width='234'
					alt=''
					draggable={false}
				/>
			</button>
			<div>
				<button
					style={{ cursor: 'pointer', fontSize: 20 }}
					className={styles.happy}
					onClick={() => navigation('/competition-admin/update')}
				>
					Обновить данные по соревнованию
				</button>
			</div>
		</div>
	)
}

export default CompetitionItemAdmin

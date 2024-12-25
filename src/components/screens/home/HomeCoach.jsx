import { useNavigate } from 'react-router-dom'
import LayoutCoach from '../../layout/LayoutCoach'
import ButtonCoach from '../../ui/button/ButtonCoach'
import StatisticsCoach from '../profile/statistics/StatisticsCoach'
import styles from './Home.module.scss'
function HomeCoach() {
	const navigate = useNavigate()
	return (
		<LayoutCoach bgImage='/images/fonmain.jpg'>
			<div style={{ marginTop: 20 }} className={styles.center}>
				<ButtonCoach clickHandler={() => navigate('/new-workout-coach')}>
					Создать тренировку
				</ButtonCoach>
				<ButtonCoach clickHandler={() => navigate('/new-tournament')}>
					Создать событие
				</ButtonCoach>
			</div>
			<h1 className={styles.heading}>Статистика по спортивным событиям</h1>
			<StatisticsCoach />
		</LayoutCoach>
	)
}

export default HomeCoach

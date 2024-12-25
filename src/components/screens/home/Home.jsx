import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Statistics from '../profile/statistics/Statistics'
import styles from './Home.module.scss'
function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/fonmain.jpg'>
			<div className={styles.center}></div>

			<Button clickHandler={() => navigate('/fitnesshi')}>
				Фитнес-марафон
			</Button>
			<h1 style={{ textAlign: 'center', marginBottom: 55 }}>Моя статистика</h1>
			<Statistics />
		</Layout>
	)
}

export default Home

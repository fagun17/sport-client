import cn from 'clsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../../layout/Layout.module.scss'
import Header from '../../../../layout/header/Header'
import Loader from '../../../../ui/Loader'
import Button from '../../../../ui/button/Button'
import {
	default as style,
	default as styles
} from '../../../profile/Profile.module.scss'
import { useProfile } from '../../../profile/useProfile.js'
import './FitnessTimer.midule.scss'
import { getPadTime } from './getPadTime'
const FitnessTimerMAterialSix = () => {
	const { isLoading } = useProfile()
	const navigate = useNavigate()
	const [timeLeft, setTimeLeft] = useState(2 * 60)
	const [isCounting, setIsCounting] = useState(false)
	const minutes = getPadTime(Math.floor(timeLeft / 60))
	const seconds = getPadTime(timeLeft - minutes * 60)
	// select two
	const [valueSelect, setValueSelect] = useState(0)
	const handleSelect = event => {
		setValueSelect(event.target.value)
	}

	function pressHandler() {
		let N = valueSelect
		let calories = (Math.random() * 1000).toFixed(2)
		let time = N * 2
		alert(
			'Количество минут,затраченных на тренировку: ' +
				time +
				'                      Затраченные калории на тренировке: ' +
				calories
		)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			isCounting && setTimeLeft(timeLeft => (timeLeft >= 1 ? timeLeft - 1 : 0))
		}, 1000)
		if (timeLeft === 0) setIsCounting(false)
		return () => {
			clearInterval(interval)
		}
	}, [timeLeft, isCounting])

	const handleStart = () => {
		if (timeLeft === 0) setTimeLeft(2 * 60)
		setIsCounting(true)
	}
	const handleStop = () => {
		setIsCounting(false)
	}
	const handleReset = () => {
		setIsCounting(false)
		setTimeLeft(2 * 60)
		alert('Упражнение выполнено !')
	}
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/public/images/resours1.jpg')`,
				height: 356
			}}
		>
			<Header />

			<div className={styles.center}>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<img
							onClick={() => navigate('/fitnessmaterialfive')}
							src={'/public/images/back.png'}
							alt='Profile'
							height='56'
							draggable={false}
						/>
						<h1 className={stylesLayout.heading}>Упражнения</h1>
					</>
				)}
			</div>

			<div
				className={styles.center}
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<img
					src={
						'https://cdn.prod.openfit.com/uploads/2020/03/10162714/wide-arm-push-up.gif'
					}
					draggable={false}
					width={400}
					height={400}
					style={{ borderRadius: 14 }}
				/>
			</div>
			<div className={styles.center}>
				<span className='timer'>{minutes}</span>
				<span className='timer'>:</span>
				<span className='timer'>{seconds}</span>
			</div>
			<div className={styles.center}>
				<div className='buttons'>
					{isCounting ? (
						<button onClick={handleStop}>Стоп</button>
					) : (
						<button onClick={handleStart}>Старт</button>
					)}

					<button onClick={handleReset}>Сброс</button>
				</div>
				<h3>Количество выполненных упражнений</h3>
				<select
					className={style.select}
					value={valueSelect}
					onChange={handleSelect}
				>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
					<option value='6'>7</option>
					<option value='8'>8</option>
					<option value='9'>9</option>
					<option value='10'>10</option>
					<option value='11'>11</option>
					<option value='12'>12</option>
					<option value='13'>13</option>
					<option value='14'>14</option>
					<option value='15'>15</option>
					<option value='16'>16</option>
					<option value='17'>17</option>
					<option value='18'>18</option>
					<option value='19'>19</option>
					<option value='20'>20</option>
				</select>
			</div>
			<button className={style.button} onClick={pressHandler}>
				Результаты тренировки
			</button>
			<Button clickHandler={() => navigate('/fitness')}>
				Завершить тренировку
			</Button>
		</div>
	)
}

export default FitnessTimerMAterialSix

import { useEffect, useState } from 'react'
import styles from './Timer.module.scss'
function Timer() {
	const [inputTime, setInputTime] = useState('') // Для хранения введенного времени в input
	const [timeLeft, setTimeLeft] = useState(0) // Время, оставшееся до конца таймера
	const [isCounting, setIsCounting] = useState(false) // Флаг, запущен ли таймер

	// Форматирование времени (добавляет 0 впереди, если число меньше 10)
	const getPadTime = time => {
		return String(time).padStart(2, '0')
	}

	const minutes = getPadTime(Math.floor(timeLeft / 60))
	const seconds = getPadTime(timeLeft % 60)

	// Обработчик изменения в input
	const handleInputChange = event => {
		setInputTime(event.target.value)
	}

	// Обработчик нажатия кнопки "Установить"
	const handleSetTime = () => {
		const parsedTime = parseInt(inputTime, 10)
		if (!isNaN(parsedTime) && parsedTime > 0) {
			setTimeLeft(parsedTime * 60) // Преобразуем введенные минуты в секунды и устанавливаем время
			setIsCounting(false) // Останавливаем таймер (если был запущен)
		} else {
			setTimeLeft(0)
			setInputTime('')
			alert('Пожалуйста, введите корректное время в минутах')
		}
	}

	// Запуск таймера
	useEffect(() => {
		let interval
		if (isCounting && timeLeft > 0) {
			interval = setInterval(() => {
				setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0))
			}, 1000)
		} else if (timeLeft === 0) {
			setIsCounting(false) // Если время вышло, останавливаем таймер
		}
		return () => {
			clearInterval(interval)
		}
	}, [isCounting, timeLeft])
	return (
		<div className={styles.timer}>
			<p className={styles.timer_one}>
				{minutes}:{seconds}
			</p>
			<div className={styles.timer_two}>
				<input
					className={styles.input}
					type='number'
					value={inputTime}
					onChange={handleInputChange}
					placeholder='Введите время в минутах'
				/>
				<button onClick={handleSetTime}>Установить</button>
			</div>
			<div className={styles.timer_three}>
				<button
					onClick={() => setIsCounting(true)}
					disabled={isCounting || timeLeft === 0}
				>
					Старт
				</button>
				<button onClick={() => setIsCounting(false)} disabled={!isCounting}>
					Пауза
				</button>
				<button onClick={() => setTimeLeft(0)}>Сброс</button>
			</div>
		</div>
	)
}

export default Timer

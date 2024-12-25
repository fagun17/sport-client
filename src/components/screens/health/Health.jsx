import cn from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import HeaderBSK from '../../layout/headerbsk/HeaderBSK'
import Loader from '../../ui/Loader'
import styles from '../profile/Profile.module.scss'
import { useProfile } from '../profile/useProfile'
import style from './Health.module.scss'
const Health = () => {
	const navigate = useNavigate()
	const [showModal, setShowModal] = useState(false)
	const [showModalOne, setShowModalOne] = useState(false)
	const { data, isLoading } = useProfile()
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenOne, setIsOpenOne] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setShowModal(true)
	}
	const handleSubmitOne = e => {
		e.preventDefault()
		setShowModalOne(true)
	}

	// input one
	const [value, setValue] = useState()
	function handleChange(event) {
		setValue(event.target.value)
	}

	// select two
	const [valueSelect, setValueSelect] = useState('Мужской')
	const handleSelect = event => {
		setValueSelect(event.target.value)
	}

	// input free
	const [value2, setValue2] = useState()
	const handleChangeTwo = event => {
		setValue2(event.target.value)
	}
	// input four
	const [value3, setValue3] = useState()
	const handleChangeFree = event => {
		setValue3(event.target.value)
	}
	const [value10, setValue10] = useState()
	const handleChangeTen = event => {
		setValue10(event.target.value)
	}
	// input five
	const [value4, setValue4] = useState()
	const handleChangeFour = event => {
		setValue4(event.target.value)
	}

	// Округляем индекс массы тела
	function roundToDecimal(index, decimalPlaces) {
		const factor = Math.pow(10, decimalPlaces)
		return Math.round(index * factor) / factor
	}

	function pressHandler() {
		let N1 = parseInt(value)
		let N2 = valueSelect
		let N3 = parseInt(value2)
		let N4 = parseInt(value3)
		let N5 = parseInt(value4)
		var q = ''
		const index = N4 / ((N3 / 100) * (N3 / 100))
		const roundIndex = roundToDecimal(index, 2)
		if (roundIndex === roundIndex) {
			if (roundIndex > 40) {
				q = 'Ожирение 3 степени (морбидное). Необходимо начать худеть!!!'
			} else if (roundIndex > 35 && roundIndex < 40) {
				q = 'Ожирение 2 степени. НУЖНО СРОЧНО ХУДЕТЬ !'
			} else if (roundIndex > 30 && roundIndex <= 35) {
				q = 'Ожирение 1 степени. НУЖНО ХУДЕТЬ !'
			} else if (roundIndex > 18.5 && roundIndex <= 24.99) {
				q = 'ВАШ ВЕС В НОРМЕ !'
			} else if (roundIndex >= 25 && roundIndex <= 30) {
				q = 'Избыточная масса тела! Вам нужно немного похудеть !'
			} else if (roundIndex > 16 && roundIndex <= 18.5) {
				q = 'Недостаточный вес тела ! НУЖНО НАБРАТЬ ВЕС!'
			} else if (roundIndex < 16) {
				q = 'Выраженный дефицит массы тела, ВАМ НУЖНО ПОДНАБРАТЬ!'
			}
		}
		let k = 1
		if (N5 < 15) {
			k == 0.9
		} else if (15 <= N5 <= 17) {
			k == 1
		} else if (N5 > 17) {
			k == 1.1
		}
		let S = ''

		var V = 0
		if (N2 == 'Женский') {
			if (N5 > 18) {
				S = 'Гиперстенический     '
			} else if (N5 < 16) {
				S = 'Астенический '
			} else if (16.5 <= N5 <= 18) {
				S = 'Нормостенический'
			}
			V = (N3 * N3 * 0.00225).toFixed(1)
		} else if (N2 == 'Мужской') {
			if (N5 > 20) {
				S = 'Гиперстенический'
			} else if (N5 <= 17) {
				S = 'Астенический '
			} else if (17.5 <= N5 <= 20) {
				S = ' Нормостенический'
			}
			V = (N3 * N3 * 0.00225).toFixed(1)
		}

		alert(
			'Индекс массы вашего тела: ' +
				roundIndex +
				'                                         Тип вашего телосложения: ' +
				S +
				'Идеальный вес для вашего тела: ' +
				V +
				' кг' +
				q
		)

		return
	}

	return (
		<>
			<HeaderBSK />
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/public/images/resours/health2.jpg')`,
					height: 380
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src={'/public/images/header/heart-svgrepo-com.svg'}
								alt='Profile'
								height='56'
								draggable={false}
							/>

							<h1 className={stylesLayout.heading}>Параметры Здоровья</h1>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<div style={{ marginTop: 20 }} className='wrapper-inner-page'>
					<form onSubmit={handleSubmit}>
						<input
							className={style.input}
							type='number'
							placeholder='Введите ваш  возраст'
							required='required'
							value={value}
							onChange={handleChange}
						/>
						<select
							className={style.select}
							value={valueSelect}
							onChange={handleSelect}
						>
							<option value='Мужской'>Мужской</option>
							<option value='Женский'>Женский</option>
						</select>
						<input
							className={style.input}
							type='number'
							placeholder='Введите ваш рост (см)'
							required='required'
							value={value2}
							onChange={handleChangeTwo}
						/>
						<input
							className={style.input}
							type='number'
							placeholder='Введите ваш рост в положении сидя (см)'
							required='required'
							value={value10}
							onChange={handleChangeTen}
						/>
						<input
							className={style.input}
							type='number'
							placeholder='Введите вес (кг)'
							required='required'
							value={value3}
							onChange={handleChangeFree}
						/>
						<input
							className={style.input}
							type='number'
							placeholder='Введите обхват кисти (см)'
							required='required'
							value={value4}
							onChange={handleChangeFour}
						/>

						<button type='submit' className={style.button}>
							Анализ
						</button>
					</form>

					{showModal && (
						<div className={style.modalcontainer}>
							<div className={style.modalcontent}>
								<div className={styles.scrollcontainer}>
									<div
										style={{ textAlign: 'center' }}
										className={styles.content}
									>
										<h2 style={{ marginBottom: 20 }}>
											Анализ параметров вашего здоровья:{' '}
										</h2>
										<p style={{ fontSize: 25 }}>
											{'Индекс массы вашего тела: '}
											<p style={{ color: '#000', fontSize: 25 }}>
												{roundToDecimal(
													value3 / ((value2 / 100) * (value2 / 100)),
													2
												)}
											</p>
										</p>
										<p style={{ fontSize: 25 }}>
											{'Идеальный вес для вашего тела: '}
											<p style={{ color: '#000' }}>
												{(value2 * value2 * 0.00225).toFixed(1)} {'кг'}
											</p>
										</p>
										<p style={{ fontSize: 25 }}>
											{'Коэффициент крепости вашего телосложения: '}{' '}
											<p style={{ color: '#000' }}>
												{(((value2 - value10) / value10) * 100).toFixed(0)}
											</p>
										</p>

										<form onSubmit={handleSubmitOne}>
											<button
												style={{ marginBottom: 20 }}
												type='submit'
												className={style.buttons}
											>
												Инфо
											</button>
										</form>
										<button
											className={style.buttontest}
											onClick={() => setShowModal(false)}
										>
											Закрыть
										</button>
										{showModalOne && (
											<div className={style.modalcontainer}>
												<div className={style.modalcontent}>
													<div className={styles.scrollcontainer}>
														<div
															style={{ textAlign: 'center' }}
															className={styles.content}
														>
															<h2>Инфо</h2>
															<h3>
																Крепость телосложения: от 10 до 20 - крепкое{' '}
															</h3>
															<h4> от 21 до 35 - среднее</h4>{' '}
															<h4>от 26 до 35 - слабое</h4>{' '}
															<h4>более 36 - очень слабое телосложение </h4>
															<h3>
																Индекс массы тела {'>'} 40:
																<h4 style={{ color: 'red' }}>
																	Ожирение 3 степени (морбидное). НУЖНО СРОЧНО
																	ХУДЕТЬ !
																</h4>
															</h3>
															<h4>
																Индекс массы тела {'>'} 35:
																<h4 style={{ color: '#d71868' }}>
																	Ожирение 2 степени. Необходимо начать
																	худеть!!!
																</h4>
															</h4>
															<h4>
																Индекс массы тела {'>'} 30:
																<h4 style={{ color: '#ca3767' }}>
																	Ожирение 1 степени. НУЖНО ХУДЕТЬ !
																</h4>
															</h4>
															<h4>
																Индекс массы тела {'>'} 25:
																<p style={{ color: '#ca2757' }}>
																	Избыточная масса тела! Вам нужно немного
																	похудеть !
																</p>
															</h4>
															<h4>
																Индекс массы тела от 18.5 до 24.99 :
																<h4 style={{ color: 'green' }}>
																	ВАШ ВЕС В НОРМЕ !
																</h4>
															</h4>
															<h4>
																Индекс массы тела от 16 до 18.5 :
																<h4 style={{ color: '#002' }}>
																	Недостаточный вес тела ! НУЖНО НАБРАТЬ ВЕС!
																</h4>
															</h4>
															<h4>
																Индекс массы тела {'<'} 16 :
																<h4 style={{ color: '#000' }}>
																	Выраженный дефицит массы тела, ВАМ НУЖНО
																	ПОДНАБРАТЬ!
																</h4>
															</h4>
															<button
																className={style.button}
																onClick={() => setShowModalOne(false)}
															>
																Закрыть
															</button>
														</div>
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Health

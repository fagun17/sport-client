import { useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutCoach from '../../../layout/LayoutCoach'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import ButtonRecommendation from '../../../ui/button/ButtonRecomendation'
import Field from '../../../ui/field/Field'
import style from '../../health/Health.module.scss'

import RecomFree from '../../health/RecomFree'
import styles from '../../profile/Profile.module.scss'
import SelectCompetitions from './SelectCompetitions'
import SelectRegisters from './SelectRegisters'
import { useNewTournament } from './useNewTournament'

const NewTournament = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewTournament()
	const [showModal, setShowModal] = useState(false)
	const handleSubmitOne = e => {
		e.preventDefault()
		setShowModal(true)
	}
	return (
		<>
			<LayoutCoach
				bgImage='/images/competition.jpg'
				heading='Создать новое событие'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Турнир успешно создан' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Название спортивного события'
						}}
						type='text'
						placeholder='Придумайте название вашего спортивного события '
					/>

					<Link to='/new-competition' className='dark-link'>
						Добавить новое соревнование
					</Link>

					<SelectCompetitions control={control} />

					{errors?.iconSport && (
						<div className='error'>{errors?.iconSport?.message}</div>
					)}

					<SelectRegisters control={control} />

					<ButtonRecommendation>Создать</ButtonRecommendation>
				</form>

				<div>
					<form onSubmit={handleSubmitOne} style={{ marginTop: 30 }}>
						<button className={style.pay}>Рейтинг спортсменов</button>
					</form>
					{showModal && (
						<div className={style.modalcontainer}>
							<div className={style.modalcontent}>
								<div className={styles.scrollcontainer}>
									<div
										style={{ textAlign: 'center', justifyItems: 'center' }}
										className={styles.content}
									>
										{' '}
										<RecomFree />
										<button
											className={style.button}
											onClick={() => setShowModal(false)}
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
		</>
	)
}

export default NewTournament

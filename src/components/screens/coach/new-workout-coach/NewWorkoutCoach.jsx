import { Link } from 'react-router-dom'

import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import Field from '../../../ui/field/Field'

import LayoutCoach from '../../../layout/LayoutCoach'
import ButtonCoach from '../../../ui/button/ButtonCoach'
import SelectExercisesCoach from './SelectExercisesCoach'
import { useNewWorkoutCoach } from './useNewWorkoutCoach'

const NewWorkoutCoach = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkoutCoach()

	return (
		<>
			<LayoutCoach
				bgImage='/images/SelectFon.jpg'
				heading='Создать новую тренировку'
				backLink='/coach'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Тренировка успешно создана' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Требуется название'
						}}
						type='text'
						placeholder='Введите название'
					/>

					<Link to='/new-exercise-coach' className='dark-link'>
						Добавить новое упражнение
					</Link>

					<SelectExercisesCoach control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<ButtonCoach>Создать</ButtonCoach>
				</form>
			</div>
		</>
	)
}

export default NewWorkoutCoach

import { Link } from 'react-router-dom'

import Loader from '../../ui/Loader'
import Alert from '../../ui/allert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'

import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<>
			<Layout
				bgImage='/images/SelectFon.jpg'
				heading='Создать новую тренировку'
				backLink='/home'
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

					<Link to='/new-exercise' className='dark-link'>
						Добавить новое упражнение
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Создать</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout

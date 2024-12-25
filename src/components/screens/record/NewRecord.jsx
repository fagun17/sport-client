import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import RecordService from '../../../services/record/record.service'
import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Alert from '../../ui/allert/Alert'
import Button from '../../ui/button/Button'
import FieldRecord from '../../ui/field/fieldRecord'
import SelectHall from '../../ui/select/SelectHall'
import SelectTime from '../../ui/select/SelectTime'
import SelectTrain from '../../ui/select/SelectTrain'
import SelectTypeTrain from '../../ui/select/SelectTypeTrain'
import SelectCoach from '../../ui/select/selectCoach'

const NewRecord = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create record'],
		body => RecordService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout
				bgImage='/images/sportHall.jpg'
				heading='Запись в зал'
				backLink='/home'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Запись прошла успешно!' />}
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<FieldRecord
						error={errors?.lastNames?.message}
						name='lastNames'
						register={register}
						options={{
							required: 'Требуется фамилия'
						}}
						type='text'
						placeholder='Фамилия'
					/>

					<FieldRecord
						error={errors?.names?.message}
						name='names'
						register={register}
						options={{
							required: 'Требуется имя'
						}}
						type='text'
						placeholder='Имя'
					/>

					<FieldRecord
						error={errors?.nameNames?.message}
						name='nameNames'
						register={register}
						options={{
							required: 'Требуется отчество'
						}}
						type='text'
						placeholder='Отчество'
					/>

					<SelectHall
						error={errors?.viewHalls?.message}
						name='viewHalls'
						register={register}
					/>

					<SelectTrain
						error={errors?.typeWorkouts?.message}
						name='typeWorkouts'
						register={register}
					/>

					<SelectCoach
						error={errors?.coaches?.message}
						name='coaches'
						register={register}
					/>

					<SelectTypeTrain
						error={errors?.viewWorkouts?.message}
						name='viewWorkouts'
						register={register}
					/>
					<FieldRecord
						error={errors?.dateTime?.message}
						name='dateTime'
						register={register}
						options={{
							required: 'Дата в формате (00.00.0000))'
						}}
						type='date'
						placeholder='Дата тренировки(число, месяц и год)'
					/>
					<SelectTime
						error={errors?.timeDate?.message}
						name='timeDate'
						register={register}
					/>

					<Button>Записаться</Button>
				</form>
			</div>
		</>
	)
}

export default NewRecord

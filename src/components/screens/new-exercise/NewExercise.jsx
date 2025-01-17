import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import Loader from '../../ui/Loader'
import Alert from '../../ui/allert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import ExerciseService from '../../../services/exercise/exercise.service'
import Layout from '../../layout/Layout'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
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
				bgImage='/images/statistics.jpg'
				heading='Создайте упражнение'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Упражнение создано!' />}
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
						placeholder='Введите название упражнения'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Требуется количество подходов'
						}}
						placeholder='Укажите количество подходов и выберите группу мышц'
					/>
					<div style={{ overflowX: 'auto' }}>
						<div style={{ width: '500px' }}>
							<Controller
								name='iconPath'
								control={control}
								render={({ field: { value, onChange } }) => (
									<div className={styles.images}>
										{data.map(name => (
											<img
												key={`ex img ${name}`}
												src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
													name
												)}`}
												alt={name}
												className={cn({
													[styles.active]: value === getIconPath(name)
												})}
												onClick={() => onChange(getIconPath(name))}
												draggable={false}
												height='45'
											/>
										))}
									</div>
								)}
							/>

							{errors?.iconPath && (
								<div className='error'>{errors?.iconPath?.message}</div>
							)}
						</div>
					</div>
					<Button>Создать</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise

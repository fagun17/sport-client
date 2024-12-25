import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import CompetitionService from '../../../services/competition/competition.service'
import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Alert from '../../ui/allert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from '../coach/new-competition/NewCompetition.module.scss'
import { getIconSport } from '../coach/new-competition/icon-sport.util.js'

const data = ['basket', 'foot', 'voleyboll', 'tennis', 'vello', 'woman']

const RegTurnir = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['update competition'],
		competitionId => CompetitionService.update(competitionId),
		{
			select: ({ data }) => data
		}
	)

	return (
		<>
			<Layout
				bgImage='/images/competitionvoleybal.jpg'
				heading='Обновить соревнование'
				backLink='/new-tournament'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Соревнование создано!' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.id?.message}
						name='id'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Требуется количество участников'
						}}
						placeholder='Укажите количество матчей или событий в соревновании'
					/>
					<Field
						error={errors?.id?.message}
						name='name'
						register={register}
						options={{
							required: 'Требуется название'
						}}
						type='text'
						placeholder='Введите название соревнования'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Требуется количество участников'
						}}
						placeholder='Укажите количество матчей или событий в соревновании'
					/>
					<Field
						error={errors?.data?.message}
						name='data'
						register={register}
						options={{
							required: 'Дата турнира(число, месяц)'
						}}
						type='date'
						placeholder='Дата турнира'
					/>
					<Field
						error={errors?.names?.message}
						name='names'
						register={register}
						options={{
							required: 'Имена участников'
						}}
						type='text'
						placeholder='Имена участников'
					/>
					<Field
						error={errors?.comandOne?.message}
						name='comandOne'
						register={register}
						options={{
							required: 'Команда 1'
						}}
						type='text'
						placeholder='Название команды или ФИО участника'
					/>
					<Field
						error={errors?.comandTwo?.message}
						name='comandTwo'
						register={register}
						options={{
							required: 'Команда 2'
						}}
						type='text'
						placeholder='Название команды или ФИО участника '
					/>

					<Controller
						name='iconSport'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconSport(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconSport(name)
										})}
										onClick={() => onChange(getIconSport(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconSport && (
						<div className='error'>{errors?.iconSport?.message}</div>
					)}

					<Button>Создать соревнование</Button>
				</form>
			</div>
		</>
	)
}

export default RegTurnir

import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import Loader from '../../../ui/Loader'
import Alert from '../../../ui/allert/Alert'
import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'

import Layout from '../../../layout/Layout'

import CompetitionService from '../../../../services/competition/competition.service'
import styles from './NewCompetition.module.scss'
import { getIconSport } from './icon-sport.util'

const data = ['basket', 'foot', 'voleyboll', 'tennis', 'vello', 'woman']

const NewCompetition = () => {
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
		['create competition'],
		body => CompetitionService.create(body),

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
				bgImage='/images/competitionvoleybal.jpg'
				heading='Создайте соревнование'
				backLink='/new-tournament'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Соревнование создано!' />}
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
						placeholder='Введите название соревнования (забега)...'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Требуется количество матчей'
						}}
						placeholder='Укажите количество матчей (забегов) в соревновании...'
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
						type='text'
						placeholder='Описание мероприятия,примечания...'
					/>
					<Field
						error={errors?.comandOne?.message}
						name='comandOne'
						register={register}
						type='text'
						placeholder='Название первой команды...'
					/>
					<Field
						error={errors?.comandTwo?.message}
						name='comandTwo'
						register={register}
						type='text'
						placeholder='Название второй команды...'
					/>
					<h2>Выберите логотип вашего соревнования (вид спорта)</h2>
					<div style={{ overflowX: 'auto' }}>
						<div style={{ width: '700px' }}>
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
						</div>
					</div>

					{errors?.iconSport && (
						<div className='error'>{errors?.iconSport?.message}</div>
					)}

					<Button>Создать соревнование</Button>
				</form>
			</div>
		</>
	)
}

export default NewCompetition

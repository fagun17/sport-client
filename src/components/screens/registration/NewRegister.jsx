import Loader from '../../ui/Loader'
import Alert from '../../ui/allert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'

import SelectTournaments from './SelectTournaments'
import { useNewRegister } from './useNewRegister'

const NewRegister = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewRegister()

	return (
		<>
			<Layout
				bgImage='/images/gazon1.jpeg'
				heading='Регистрация в спортивное событие'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Регистрация прошла успешно!' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.fullName?.message}
						name='fullName'
						register={register}
						options={{
							required: 'ФИО...'
						}}
						type='text'
						placeholder='ФИО...'
					/>
					<Field
						error={errors?.tabNumber?.message}
						name='tabNumber'
						register={register}
						options={{
							required: 'Телеграмм...'
						}}
						type='text'
						placeholder='Телеграмм...'
					/>

					<Field
						error={errors?.height?.message}
						name='height'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Требуется рост'
						}}
						placeholder='Укажите ваш рост'
					/>

					<SelectTournaments control={control} />

					<Button>Зарегистрироваться</Button>
				</form>
			</div>
		</>
	)
}

export default NewRegister

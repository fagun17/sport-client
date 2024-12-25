import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()
	return (
		<>
			<Layout
				heading='Войти в систему'
				bgImage='/public/images/phoneBackgroundTwo.jpg'
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Требуется имя пользователя или почта'
						}}
						type='email'
						placeholder='Требуется почта или имя пользователя...'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Требуется пароль'
						}}
						type='password'
						placeholder='Введите пароль'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Войти</Button>
						<Button clickHandler={() => setType('register')}>
							Регистрация
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth

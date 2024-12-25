import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'

const NotFound = () => {
	const Nav = setTimeout(() => {
		navigate('/auth')
	}, 1000)
	const navigate = useNavigate()
	return (
		<>
			<Layout heading='Страницы не существует' />
			<div
				style={{
					textAlign: 'center',
					justifyContent: 'center'
				}}
			></div>
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	)
}

export default NotFound

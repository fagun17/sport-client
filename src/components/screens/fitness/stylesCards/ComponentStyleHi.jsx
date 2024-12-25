import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComponentStyleHi = () => {
	const navigate = useNavigate()
	return (
		<section>
			<div className='row'>
				<div className='card'>
					<div className='cover item-d'>
						<h1>
							Фитнес<br></br>и спорт
						</h1>

						<div className='card-back'>
							<a onClick={() => navigate('/fitness')} href='#'>
								Перейти к фитнес-картам
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ComponentStyleHi

import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComponentStyleHiCoach = () => {
	const navigate = useNavigate()
	return (
		<section>
			<div className='row'>
				<div className='card'>
					<div className='cover item-d'>
						<h1>
							Cпорт<br></br>фитнес
						</h1>

						<div className='card-back'>
							<a onClick={() => navigate('/fitness-coach')} href='#'>
								Перейти к фитнес-картам
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ComponentStyleHiCoach

import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComponentStyleCoach = () => {
	const navigate = useNavigate()
	return (
		<section>
			<div className='row'>
				<div className='card'>
					<div className='cover item-a'>
						<h1>
							Кроссфит<br></br>
						</h1>

						<div className='card-back'>
							<a onClick={() => navigate('/skiings-coach')} href='#'>
								Перейти к фитнес-карте
							</a>
						</div>
					</div>
				</div>

				<div className='col-md-4 col-sm-6 col-xs-12'>
					<div className='card'>
						<div className='cover item-b'>
							<h1 style={{ color: 'red' }}>
								Железо<br></br>
							</h1>
							<div className='card-back'>
								<a onClick={() => navigate('/crossfit-coach')} href='#'>
									Перейти к фитнес-карте
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-4 col-sm-6 col-xs-12'>
					<div className='card'>
						<div className='cover item-c'>
							<h1 style={{ color: 'yellow' }}>
								<br></br>Бег
							</h1>
							<div className='card-back'>
								<a href='#' onClick={() => navigate('/run-coach')}>
									Перейти к фитнес-карте
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ComponentStyleCoach

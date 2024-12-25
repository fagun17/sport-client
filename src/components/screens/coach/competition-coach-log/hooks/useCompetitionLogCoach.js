import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import CompetitionLogService from '../../../../../services/competition/competition-log.service'

import { useUpdateLogTimeCoach } from './useUpdateLogTimeCoach'

export const useCompetitionLog = () => {
	const { id } = useParams()

	const [times, setTimes] = useState([])

	const {
		data: competitionLog,
		isSuccess,
		isLoading
	} = useQuery(
		['get competition log', id],
		() => CompetitionLogService.getById(id),
		{
			select: ({ data }) => data,
			onSuccess(data) {
				if (data?.times?.length) setTimes(data.times)
			}
		}
	)

	const { error, updateTime } = useUpdateLogTimeCoach(competitionLog?.times)

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = timeId => {
		return times.find(time => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				comandTwo: +time.comandTwo,
				comandOne: +time.comandOne
			}
		})
	}

	return {
		competitionLog,
		isSuccess,
		isLoading,
		toggleTime,
		error,
		onChangeState,
		getState
	}
}

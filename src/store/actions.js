/* @flow */
import { getWeather, getImage } from '../utils/api'
import type { Action, Coord, Dispatch } from '../types'

export const fetchWeather = (payload: Coord): Action => ({
  type: 'FETCH_WEATHER',
  payload: getWeather(payload)
})

export const fetchImage = (payload: string): Action => ({
  type: 'FETCH_IMAGE',
  payload: getImage(payload)
})

export const updateCityInfo = (payload: Object): Action => ({
  type: 'UPDATE_CITY_INFO',
  payload
})

export const addCity = (payload: Object) => (dispatch: Dispatch) => {
  dispatch(updateCityInfo(payload))
  dispatch(fetchWeather(payload.coord))
  dispatch(fetchImage(payload.name))
}

export const resetCity = (): Action => ({
  type: 'RESET_CITY'
})

/* @flow */
import Immutable, { ImmutableObject } from 'seamless-immutable'
import type { StoreState, Action } from '../types'

export default function (
  state: ImmutableObject<StoreState> = Immutable({}),
  action: Action
): ImmutableObject<StoreState> {
  switch (action.type) {
    case 'UPDATE_CITY_INFO':
      return state.set('city', action.payload)

    case 'FETCH_IMAGE_PENDING':
      return state.set('isLoadingImage', true)

    case 'FETCH_IMAGE_REJECTED':
      return state.merge({
        isLoadingImage: false
      })

    case 'FETCH_IMAGE_FULFILLED':
      return state.merge({
        isLoadingImage: false,
        image: action.payload.data
      })

    case 'FETCH_WEATHER_PENDING':
      return state.merge({
        isLoadingWeather: true
      })

    case 'FETCH_WEATHER_REJECTED':
      return state.merge({
        weather: {},
        isLoadingWeather: false
      })

    case 'FETCH_WEATHER_FULFILLED':
      return state.merge({
        weather: action.payload.data,
        isLoadingWeather: false
      })

    case 'RESET_CITY':
      return state.merge({
        weather: null,
        city: null,
        image: null
      })

    default:
      return state
  }
}

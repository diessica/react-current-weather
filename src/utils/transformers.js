/* @flow */
import Immutable from 'seamless-immutable'
import { createTransform } from 'redux-persist'
import type { WeatherResult } from '../types'

export const transformWeatherData = (data: Object): WeatherResult => ({
  name: data.name,
  wind: data.wind,
  description: data.weather[0].description,
  iconId: data.weather[0].icon,
  ...data.main
})

export const transformImageData = (data: Object): string => (
  data.images.original.url
)

export const capitalize = (s: string): string => (
  s.charAt(0).toUpperCase() + s.slice(1)
)

export const immutableTransformer = createTransform(
  (state: any) => state && state.asMutable
    ? state.asMutable({ deep: true })
    : state,
  (raw: any) => Immutable.from(raw),
  { blacklist: [], whitelist: [] }
)

export const stateReconciler = (state: any, inboundState: any) => (
  state.merge(inboundState, { deep: true })
)

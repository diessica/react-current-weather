/* @flow */
import axios from 'axios'
import { transformWeatherData, transformImageData } from '../utils/transformers'
import type { Coord } from '../types'

export const API_KEY = {
  weather: '96182be90eef6206906be9d8de6bce57',
  giphy: 'dc6zaTOxFJmzC'
}

export const API_URL = {
  weather: `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY.weather}`,
  giphy: `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY.giphy}`
}

export const getImage = (q: string): Promise<Object> => {
  return axios.get(API_URL.giphy, {
    params: { q: `${q} city` },
    transformResponse: axios.defaults.transformResponse.concat((res) => {
      return res.meta.status === 200
        ? transformImageData(res.data[0])
        : res
    })
  })
}

export const getWeather = (
  { lat, lon }: Coord,
  units: 'metric' | 'imperial' = 'metric'
): Promise<Object> => {
  return axios(API_URL.weather, {
    params: { lat, lon, units },
    transformResponse: axios.defaults.transformResponse.concat((res) => {
      return res.cod === 200
        ? transformWeatherData(res)
        : res
    })
  })
}

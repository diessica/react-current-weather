/* eslint-env jest */
import reducer from '../reducer'
import Immutable from 'seamless-immutable'
import * as actions from '../actions'

describe('reducer', () => {
  const initialState = Immutable({})

  it('should return an immutable initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('city\'s input handling', () => {
    it('should handle UPDATE_CITY_INFO', () => {
      const city = {
        name: 'blabla',
        coord: { lat: '20', lon: '20' }
      }

      expect(
        reducer(initialState, actions.updateCityInfo(city))
      ).toEqual(Immutable({ city }))
    })

    it('should handle RESET_CITY', () => {
      const mockedState = Immutable({
        city: {
          name: 'blabla',
          coord: { lat: '20', lon: '20' }
        },
        weather: {},
        image: ''
      })

      expect(
        reducer(mockedState, actions.resetCity())
      ).toEqual(Immutable({
        weather: null,
        city: null,
        image: null
      }))
    })
  })

  describe('city\'s fetched data', () => {
    it('should handle FETCH_IMAGE', () => {
      expect(
        reducer(initialState, { type: 'FETCH_IMAGE_PENDING' })
      ).toEqual(Immutable({ isLoadingImage: true }))

      expect(
        reducer(initialState, {
          type: 'FETCH_IMAGE_FULFILLED',
          payload: { data: 'wow' }
        })
      ).toEqual(Immutable({
        isLoadingImage: false,
        image: 'wow'
      }))

      expect(
        reducer(initialState, { type: 'FETCH_IMAGE_REJECTED' })
      ).toEqual(Immutable({ isLoadingImage: false }))
    })

    it('should handle FETCH_WEATHER', () => {
      const initialState = Immutable({})
      const fakeWeatherResponse = {
        foo: 'bar'
      }

      expect(
        reducer(initialState, { type: 'FETCH_WEATHER_PENDING' })
      ).toEqual(Immutable({ isLoadingWeather: true }))

      expect(
        reducer(initialState, { type: 'FETCH_WEATHER_REJECTED' })
      ).toEqual(Immutable({ isLoadingWeather: false, weather: {} }))

      expect(
        reducer(initialState, {
          type: 'FETCH_WEATHER_FULFILLED',
          payload: {
            data: fakeWeatherResponse
          }
        })
      ).toEqual(Immutable({
        isLoadingWeather: false,
        weather: fakeWeatherResponse
      }))
    })
  })
})

/* eslint-env jest */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import moxios from 'moxios'
import * as actions from '../actions'
import { transformWeatherData } from '../../utils/transformers'

const mockStore = configureStore([thunk, promise()])

describe('actions', () => {
  it('[addCity, updateCityInfo] should update city and fetch its info when new city is added', () => {
    const store = mockStore({})

    const fakeCity = {
      name: 'Amsterdam',
      coord: { lan: '40', lon: '20' }
    }

    store.dispatch(actions.addCity(fakeCity))

    expect(
      store.getActions()
    ).toEqual([
      actions.updateCityInfo(fakeCity),
      { type: 'FETCH_WEATHER_PENDING' },
      { type: 'FETCH_IMAGE_PENDING' }
    ])
  })

  describe('city data fetching with pending and fulfilled feedbacks', () => {
    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

    it('[fetchImage] should fetch city\'s image', () => {
      const store = mockStore({})

      const fakeCity = {
        name: 'Amsterdam',
        coord: { lan: '40', lon: '20' }
      }

      const url = 'https://media.giphy.com/media/giphy.gif'

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          response: {
            meta: { status: 200 },
            data: [{
              images: { original: { url } }
            }]
          },
          status: 200
        })
      })

      return store.dispatch(actions.fetchImage(fakeCity.name))
        .then(() => {
          expect(
            store.getActions()[0]
          ).toMatchObject({
            type: 'FETCH_IMAGE_PENDING'
          })

          expect(
            store.getActions()[1]
          ).toMatchObject({
            type: 'FETCH_IMAGE_FULFILLED',
            payload: {
              data: url
            }
          })
        })
        .catch(err => console.log(err))
    })

    it('[fetchWeather] should fetch city\'s weather', () => {
      const store = mockStore({})

      const fakeCity = {
        name: 'Amsterdam',
        coord: { lan: '40', lon: '20' }
      }

      const weatherResult = {
        cod: 200,
        name: 'Amsterdam',
        wind: {
          deg: 40,
          speed: 1
        },
        weather: [{
          description: 'mist',
          icon: '50d'
        }],
        main: {
          temp: 8.47,
          pressure: 1016,
          humidity: 87,
          temp_min: 6,
          temp_max: 10
        }
      }

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          response: weatherResult,
          status: 200
        })
      })

      return store.dispatch(actions.fetchWeather(fakeCity.coord))
        .then(() => {
          expect(store.getActions()[0]).toMatchObject({
            type: 'FETCH_WEATHER_PENDING'
          })

          expect(store.getActions()[1]).toMatchObject({
            type: 'FETCH_WEATHER_FULFILLED',
            payload: {
              data: transformWeatherData(weatherResult)
            }
          })
        })
        .catch(err => console.log(err))
    })
  })
})

/* eslint-env jest */
import getWeatherIcon from '../get-weather-icon'
import fewCloudsSvg from '../../icons/few_clouds.svg'

describe('getWeatherIcon', () => {
  it('gets weather icon according to open weather api ids', () => {
    expect(getWeatherIcon('02d')).toBe(fewCloudsSvg)
  })
})

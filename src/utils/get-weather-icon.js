/* @flow */
import get from 'lodash.get'
import clearSkySvg from '../icons/clear_sky.svg'
import fewCloudsSvg from '../icons/few_clouds.svg'
import scatteredCloudsSvg from '../icons/scattered_clouds.svg'
import brokenCloudsSvg from '../icons/broken_clouds.svg'
import showerRainSvg from '../icons/shower_rain.svg'
import rainSvg from '../icons/rain.svg'
import thunderstormSvg from '../icons/thunderstorm.svg'
import snowSvg from '../icons/snow.svg'
import mistSvg from '../icons/mist.svg'
import type { Icon } from '../types'

export const iconsMap = [{
  name: 'clear_sky',
  id: ['01d', '01n'],
  icon: clearSkySvg
}, {
  name: 'few_clouds',
  id: ['02d', '02n'],
  icon: fewCloudsSvg
}, {
  name: 'scattered_clouds',
  id: ['03d', '03n'],
  icon: scatteredCloudsSvg
}, {
  name: 'broken_clouds',
  id: ['04d', '04n'],
  icon: brokenCloudsSvg
}, {
  name: 'shower_rain',
  id: ['09d', '09n'],
  icon: showerRainSvg
}, {
  name: 'rain',
  id: ['10d', '10n'],
  icon: rainSvg
}, {
  name: 'thunderstorm',
  id: ['11d', '11n'],
  icon: thunderstormSvg
}, {
  name: 'snow',
  id: ['13d', '13n'],
  icon: snowSvg
}, {
  name: 'mist',
  id: ['50d', '50n'],
  icon: mistSvg
}]

export default (
  iconId: string,
  icons: Array<Icon> = iconsMap,
): string => {
  const icon = icons.find((item: Icon): boolean => item.id.includes(iconId))
  return get(icon, 'icon')
}

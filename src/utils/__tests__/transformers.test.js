/* eslint-env jest */
import {
  transformWeatherData,
  transformImageData,
  capitalize
} from '../transformers'

describe('transformWeatherData', () => {
  it('formats weather data coming from API properly', () => {
    const fakeApiData = {'coord': {'lon': 4.89, 'lat': 52.37}, 'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03d'}], 'base': 'stations', 'main': {'temp': 8.74, 'pressure': 1009, 'humidity': 61, 'temp_min': 8, 'temp_max': 10}, 'visibility': 10000, 'wind': {'speed': 9.8, 'deg': 270}, 'clouds': {'all': 40}, 'dt': 1490095500, 'sys': {'type': 1, 'id': 5204, 'message': 0.1049, 'country': 'NL', 'sunrise': 1490074759, 'sunset': 1490118989}, 'id': 2759794, 'name': 'Amsterdam', 'cod': 200}

    expect(transformWeatherData(fakeApiData)).toEqual({
      name: 'Amsterdam',
      wind: {
        speed: 9.8,
        deg: 270
      },
      description: 'scattered clouds',
      iconId: '03d',
      temp: 8.74,
      pressure: 1009,
      humidity: 61,
      temp_min: 8,
      temp_max: 10
    })
  })
})

describe('transformImageData', () => {
  it('formats image data coming from API properly', () => {
    const fakeApiData = {'type': 'gif', 'id': 'FiGiRei2ICzzG', 'slug': 'funny-cat-FiGiRei2ICzzG', 'url': 'http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG', 'bitly_gif_url': 'http://gph.is/1fIdLOl', 'bitly_url': 'http://gph.is/1fIdLOl', 'embed_url': 'http://giphy.com/embed/FiGiRei2ICzzG', 'username': '', 'source': 'http://tumblr.com', 'rating': 'g', 'caption': '', 'content_url': '', 'source_tld': 'tumblr.com', 'source_post_url': 'http://tumblr.com', 'import_datetime': '2014-01-18 09:14:20', 'trending_datetime': '1970-01-01 00:00:00', 'images': {'fixed_height': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif', 'width': '568', 'height': '200', 'size': '460622', 'mp4': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.mp4', 'mp4_size': '13866', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.webp', 'webp_size': '367786'}, 'fixed_height_still': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200_s.gif', 'width': '568', 'height': '200'}, 'fixed_height_downsampled': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200_d.gif', 'width': '568', 'height': '200', 'size': '476276', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200_d.webp', 'webp_size': '100890'}, 'fixed_width': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.gif', 'width': '200', 'height': '70', 'size': '90483', 'mp4': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.mp4', 'mp4_size': '14238', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.webp', 'webp_size': '47302'}, 'fixed_width_still': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w_s.gif', 'width': '200', 'height': '70'}, 'fixed_width_downsampled': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif', 'width': '200', 'height': '70', 'size': '71069', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.webp', 'webp_size': '13186'}, 'fixed_height_small': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/100.gif', 'width': '284', 'height': '100', 'size': '460622', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/100.webp', 'webp_size': '72748'}, 'fixed_height_small_still': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/100_s.gif', 'width': '284', 'height': '100'}, 'fixed_width_small': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif', 'width': '100', 'height': '35', 'size': '90483', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/100w.webp', 'webp_size': '18298'}, 'fixed_width_small_still': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/100w_s.gif', 'width': '100', 'height': '35'}, 'downsized': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif', 'width': '500', 'height': '176', 'size': '426811'}, 'downsized_still': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy_s.gif', 'width': '500', 'height': '176'}, 'downsized_large': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif', 'width': '500', 'height': '176', 'size': '426811'}, 'original': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif', 'width': '500', 'height': '176', 'size': '426811', 'frames': '22', 'mp4': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.mp4', 'mp4_size': '51432', 'webp': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.webp', 'webp_size': '291616'}, 'original_still': {'url': 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy_s.gif', 'width': '500', 'height': '176'}}}

    expect(transformImageData(fakeApiData)).toEqual(
      'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif'
    )
  })
})

describe('capitalize', () => {
  it('capitalizes first letter of a word', () => {
    expect(capitalize('mad banana')).toBe('Mad banana')
  })
})

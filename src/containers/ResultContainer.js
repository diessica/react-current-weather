/* @flow */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Result from '../components/Result'
import withLoader from '../utils/with-loader'
import { resetCity } from '../store/actions'

const mapStateToProps = state => ({
  weather: state.weather,
  cityName: state.city ? state.city.name : null,
  isLoading: state.isLoadingWeather
})

const mapDispatchToProps = dispatch => ({
  onChangeLocation: bindActionCreators(resetCity, dispatch)
})

export const ResultContainer = withLoader({
  dataProp: 'weather',
  message: 'Cannot get weather data at this moment. Please reload the page and try again.'
}, Result)

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)

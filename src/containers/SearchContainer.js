/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'
import Search from '../components/Search'
import type { WeatherResult, Geosuggestion } from '../types'

type Props = {
  actions: Object,
  weather: WeatherResult
};

const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export const SearchContainer = ({ actions, weather }: Props) => {
  function onSubmit ({ gmaps, location }: Geosuggestion) {
    const name = gmaps.address_components[0].long_name

    actions.addCity({
      name,
      coord: {
        lat: location.lat,
        lon: location.lng
      }
    })
  }

  return weather ? null : <Search onSubmit={onSubmit} />
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

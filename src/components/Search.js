/* @flow */
import React from 'react'
import Geosuggest from './Geosuggest'
import Fade from './Fade'
import type { Geosuggestion } from '../types'

type Props = {
  onSubmit: Function
};

export default ({ onSubmit }: Props) => (
  <Fade>
    <label htmlFor='location'>
      Search for a city's <b>current weather</b>.
    </label>

    <Geosuggest
      types={['(cities)']}
      placeholder='City name'
      onSuggestSelect={({ gmaps, location }: Geosuggestion) => onSubmit({
        gmaps, location
      })}
     />
  </Fade>
)

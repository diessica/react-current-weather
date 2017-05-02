/* @flow */
import React from 'react'
import styled from 'styled-components'
import { capitalize } from '../utils/transformers'
import getWeatherIcon from '../utils/get-weather-icon'
import { Button } from '../styles'
import Fade from './Fade'
import type { WeatherResult } from '../types'

const Icon = styled.img`
  width: 60px;
  float: left;
`

const Temperature = styled.p`
  float: right;
  font-size: 30px;
  margin: 10px 0;
`

const TemperatureContainer = styled.div`
  overflow: auto;
  width: 145px;
  margin: 15px auto;
`

const ResultBox = styled.div`
  border: 1px solid #3d414c;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 5px rgba(0,0,0,0.15);
  line-height: 1.5;
  text-shadow: 0 1px 1px #000;
  background-size: cover;
`

const Title = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.5px;
  font-weight: bold;
`

const AditionalInfo = styled.p`
  text-align: left;
  margin-bottom: 0;
`

const Description = styled.p`
  max-width: 350px;
  margin: 10px auto;
`

type Props = {
  weather: WeatherResult,
  cityName: string,
  onChangeLocation: void
};

const Result = ({ weather, cityName, onChangeLocation }: Props) => {
  const currentUnit = '°C'

  return (
    <Fade>
      <Button onClick={onChangeLocation}>
        ← Change Location
      </Button>

      <ResultBox>
        <Title>Weather for {cityName}</Title>

        <TemperatureContainer>
          <Icon
            src={getWeatherIcon(weather.iconId)}
            alt={weather.description}
          />

          <Temperature>
            {Math.round(weather.temp)} {currentUnit}
          </Temperature>
        </TemperatureContainer>

        <Description>
          <b>{capitalize(weather.description) }</b>.
          Temperatures may go from {weather.temp_min} {currentUnit} to {weather.temp_max} {currentUnit} today.
        </Description>

        <AditionalInfo>
          <b>Humidity</b>: {weather.humidity}% <br />
          <b>Pressure</b>: {weather.pressure} hPa <br />
          <b>Wind</b>: {weather.wind.speed} m/s
        </AditionalInfo>
      </ResultBox>
    </Fade>
  )
}

export default Result

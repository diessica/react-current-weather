/* @flow */
import Geosuggest from 'react-geosuggest'
import styled from 'styled-components'
import { inputStyles } from '../styles'
import colors from '../utils/colors'

export default styled(Geosuggest)`
  position: relative;
  margin: 25px auto;
  text-align: left;
  z-index: 1;
  max-width: 350px;

  .geosuggest__input {
    ${inputStyles}
    font-size: 20px;
    padding: 25px 15px;
    border-radius: 5px 5px 0 0;
    transition: box-shadow 250ms ease-in-out;
    box-shadow: 0 0 0 transparent;
  }

  .geosuggest__input:focus {
    border-color: ${colors.lightestBlue};
    box-shadow: 0 0 15px rgba(0,0,0,0.85);
  }

  .geosuggest__suggests {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 25em;
    padding: 0;
    margin-top: -1px;
    background: ${colors.lightestBlue};
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    z-index: 5;
    box-shadow: 0 5px 5px rgba(0,0,0,0.15);
  }

  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
  }

  .geosuggest__item {
    font-size: 14px;
    padding: .65em .65em;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid ${colors.lightBlue};
    }
  }

  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: ${colors.lightBlue};
  }

  .geosuggest__item--active {
    background: ${colors.reactBlue};
    color: #000;
  }

  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    color: #fff;
  }
`

/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { SearchContainer } from '../SearchContainer'

describe('SearchContainer', () => {
  it('should render if there are no search results', () => {
    const props = {
      actions: {},
      weather: null
    }

    const wrapper = shallow(<SearchContainer {...props} />)
    expect(wrapper.exists()).toEqual(true)
  })

  it('should not render if there are search results', () => {
    const props = {
      actions: {},
      weather: {
        name: 'Data',
        description: 'Data',
        iconId: 'Data',
        temp: 20,
        temp_min: 'Data',
        temp_max: 'Data',
        humidity: 'Data',
        pressure: 'Data',
        wind: {
          speed: 'Data'
        }
      }
    }

    const wrapper = shallow(<SearchContainer {...props} />)
    expect(wrapper.type()).toBeNull()
  })
})

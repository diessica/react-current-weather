/* eslint-env jest */
import React from 'react'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { ResultContainer } from '../ResultContainer'

describe('ResultContainer', () => {
  it('should render if there is results', () => {
    const props = {
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
      },
      cityName: 'Amsterdam',
      isLoading: false,
      onChangeLocation: () => {}
    }

    const wrapper = shallow(<ResultContainer {...props} />)
    expect(wrapper.exists()).toEqual(true)
  })

  it('should not render if there is no results', () => {
    const props = {
      weather: null,
      cityName: null,
      isLoading: false,
      onChangeLocation: () => {}
    }

    const wrapper = shallow(<ResultContainer {...props} />)
    expect(wrapper.type()).toBeNull()
  })

  it('should run onChangeLocation from props when its button is clicked', () => {
    const props = {
      onChangeLocation: sinon.spy(),
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
      },
      cityName: 'Amsterdam',
      isLoading: false
    }
    const wrapper = mount(<ResultContainer {...props} />)
    wrapper.find('button').simulate('click')

    expect(
      wrapper.prop('onChangeLocation').calledOnce
    ).toEqual(true)
  })
})

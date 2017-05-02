/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import withLoader from '../with-loader'

describe('withLoader', () => {
  let MyDiv

  beforeEach(function () {
    MyDiv = ({ myResult }) => <div>{myResult}</div>
  })

  it('shows loader when component is loading', () => {
    const EnhancedMyDiv = withLoader({ dataProp: 'myResult' }, MyDiv)
    const wrapper = shallow(<EnhancedMyDiv isLoading />)

    expect(wrapper.find('Loader').exists()).toEqual(true)
  })

  it('shows component with data when data is done loading', () => {
    const data = 'Mad bananas'
    const EnhancedMyDiv = withLoader({ dataProp: 'myResult' }, MyDiv)
    const wrapper = mount(
      <EnhancedMyDiv isLoading={false} myResult={data} />
    )

    expect(wrapper.contains(<div>{data}</div>)).toEqual(true)
  })

  it('shows not found message when component\'s data is empty', () => {
    const EnhancedMyDiv = withLoader({ dataProp: 'myResult' }, MyDiv)
    const wrapper = shallow(
      <EnhancedMyDiv isLoading={false} myResult={{ }} />
    )

    expect(wrapper.contains(<p>Not found.</p>)).toEqual(true)
  })

  it('shows custom not found message when component\'s data is empty', () => {
    const message = 'Data for MyDiv component was not found!'
    const EnhancedMyDiv = withLoader({ dataProp: 'myResult', message }, MyDiv)
    const wrapper = shallow(
      <EnhancedMyDiv isLoading={false} myResult={{ }} />
    )

    expect(wrapper.contains(<p>{message}</p>)).toEqual(true)
  })
})

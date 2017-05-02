/* @flow */
import React, { Component } from 'react'
import Loader from 'halogen/BeatLoader'
import isEmpty from 'lodash.isempty'
import colors from './colors'

type Config = {
  dataProp: string,
  message: string
};

type Props = {
  data: any,
  isLoading: boolean
};

export default ({
  dataProp,
  message = 'Not found.'
}: Config,
  WrappedComponent: ReactClass<any>
): ReactClass<*> => {
  return class extends Component<any, Props, any> {
    render () {
      const { isLoading } = this.props
      const data = this.props[dataProp]

      if (isLoading) {
        return <Loader color={colors.lightestBlue} size='16px' margin='3px' />
      }

      if (!isLoading && !data) {
        return null
      }

      if (!isLoading && isEmpty(data)) {
        return <p>{message}</p>
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

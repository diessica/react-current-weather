/* @flow */
import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SearchContainer from './containers/SearchContainer'
import ResultContainer from './containers/ResultContainer'

export const AppWrapper = styled.div`
  text-align: center;
  max-width: 500px;
  margin: auto;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
`

type Props = { image: string };

class App extends Component<any, Props, any> {
  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.image !== this.props.image) {
      this.setBackground(nextProps.image)
    }
  }

  setBackground = (img: string) => {
    const doc: Object = document
    doc.body.style.backgroundImage = `url('${img}')`
  }

  render () {
    return (
      <AppWrapper>
        <SearchContainer />
        <ResultContainer />
      </AppWrapper>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)

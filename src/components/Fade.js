/* @flow */
import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

type Props = {
  children?: React.Element<any>
};

export default ({ children }: Props) => (
  <CSSTransitionGroup
    transitionName='fade'
    transitionAppearTimeout={500}
    transitionLeaveTimeout={250}
    transitionEnterTimeout={500}
    transitionAppear
    transitionEnter
    transitionLeave
  >
    {children}
  </CSSTransitionGroup>
)

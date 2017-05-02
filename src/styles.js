import styled, { css, injectGlobal } from 'styled-components'
import colors from './utils/colors'

injectGlobal([`
  html,
  body {
    height: 100%;
  }

  body {
    background-color: #1d2028;
    background-size: cover;
    color: #fff;
    background-blend-mode: overlay;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    font-weight: 400;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }
`])

export const Button = styled.button`
  padding: 13.5px 20px;
  background: ${colors.darkBlue};
  border: 0;
  color: #fff;
  font-weight: 600;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
`

export const inputStyles = css`
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 1px solid ${colors.darkBlue};
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  height: 40px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`

export const Input = styled.input`${inputStyles}`

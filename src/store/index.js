/* @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import promise from 'redux-promise-middleware'
import Immutable from 'seamless-immutable'
import { persistStore, autoRehydrate } from 'redux-persist'
import { stateTransformer } from 'redux-seamless-immutable'
import thunk from 'redux-thunk'
import isEmpty from 'lodash.isempty'
import { stateReconciler, immutableTransformer } from '../utils/transformers'
import reducer from './reducer'
import * as actions from './actions'

const enhancers = compose(
  applyMiddleware(
    createLogger({ stateTransformer }),
    promise(),
    thunk
  ),
  autoRehydrate({ log: true, stateReconciler }),
  window.devToolsExtension && window.devToolsExtension()
)

const initialState = Immutable({})

const store = createStore(reducer, initialState, enhancers)

persistStore(store, {
  transforms: [immutableTransformer],
  whitelist: ['city']
}, () => {
  if (!isEmpty(store.getState().city)) {
    store.dispatch(actions.addCity(store.getState().city))
  }
})

export default store

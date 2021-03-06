import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './Root'
import configureStore from './stores/configureStore'
import '../styles/index.less'

const store = configureStore();
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
)
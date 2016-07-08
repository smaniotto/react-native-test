'use strict';


import React, { Component } from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore } from 'redux-persist'

import App from './src/containers/App'
import reducers from './src/reducers'



const store = createStore(
  reducers,
  undefined,
  compose(
    autoRehydrate(),
    applyMiddleware(thunk),
  )
)
persistStore(store, {storage: AsyncStorage})

class TestApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Test', () => TestApp);

import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import Navigator from './app/navigation'
import store from './app/store/index'
export default App = () => {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  )
}
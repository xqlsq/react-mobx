import React from 'react'
import { Provider } from 'mobx-react'
import Route from './router'
import store from './store'

export default class extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Route></Route>
      </Provider>
    )
  }
}

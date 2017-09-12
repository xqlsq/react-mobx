import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { useStrict } from 'mobx'

useStrict(true)

ReactDOM.render(<App />, document.getElementById('root'))

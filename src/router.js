import { Router, Route, hashHistory } from 'react-router'
import React from 'react'

import UserInfo from './page/userInfo'
import Ques from './page/ques'
import Result from './page/result'

export default class extends React.Component{
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={UserInfo}></Route>
                <Route path='/ques' component={Ques}></Route>
                <Route path='/result' component={Result}></Route>
                <Route path='*' component={UserInfo} />
            </Router>
        )
    }
}

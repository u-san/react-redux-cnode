
import React, { Component } from 'react'
import { render } from 'react-dom'
import { hashHistory, browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import Topics from './contains/Topics'
import Topic from './contains/Topic'
import Nav from './contains/Nav'
import Login from './contains/Login'
import UserDetail from './components/UserDetail'

export default class Root extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Nav} >
					<IndexRoute component={Topics} />
					<Route path="login" component={Login} />
					<Route path="user/:username" component={UserDetail} />
				    <Route path=":type" component={Topics}/>
				    <Route path="topic/:id" component={Topic}/>
				</Route>
			</Router>
		)
	}
}


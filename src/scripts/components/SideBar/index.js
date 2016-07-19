
import React, { Component } from 'react'
import { Link } from 'react-router'
import { NAV_ITEM } from '../../config'
import './sideBar.less'


export default class SideBar extends Component {
	constructor(props) {
		super(props)
		this.clickHandle = this.clickHandle.bind(this)
	}

	clickHandle(type) {

		this.props.actions.hideSideBar()

		// if ( type === 'message' || type === 'about') return
		if ( type === this.props.type) return

		document.body.scrollTop = 0;
	}

	render() {
		let user = this.props.user

		let link = ''
		let li = NAV_ITEM.map( tag => {
			if (tag.key === 'message') {
				link = <Link to={'/' + (user.login ? tag.key : 'login')}>{tag.name}</Link>
			}
			else {
				link =<Link to={'/' + tag.key}>{tag.name}</Link>
			}
			return (
				<li className={tag.key} key={tag.key} onClick={() => this.clickHandle(tag.key)}>
					<i className={`iconfont icon-${tag.icon}`}></i>
					{link}
				</li>
			)
		  }
		)

		let loginLink = user.login
					? <Link to={'/user/' + user.data.loginname} >
						<img className="avatar" src={user.data.avatar_url} />
						<span>{user.data.loginname}</span>
					  </Link>
					: <Link to='/login' style={{'textAlign': 'center'}}>
						<i className='iconfont icon-peoplefill'></i>
						<span>未登录</span>
					  </Link>

		return (
			<ul className={`sideBar ${this.props.sideBarShow ? 'show' : ''}`}>
				<li className="login-status" onClick={this.props.actions.hideSideBar}>
					{loginLink}
				</li>
				{li}
			</ul>
		)
	}
}


// Object {
// 	success: true, 
// 	loginname: "u-san", 
// 	avatar_url: "https://avatars.githubusercontent.com/u/16940684?v=3&s=120", 
// 	id: "577e1a2d49e4faa95429c560"}
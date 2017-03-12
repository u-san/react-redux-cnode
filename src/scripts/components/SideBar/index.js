
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
				link = <Link to={'/' + tag.key}>{tag.name}</Link>
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
					? <div>
						  <Link to={'/user/' + user.data.loginname} >
							<img className="avatar" src={user.data.avatar_url} />
							<span>{user.data.loginname}</span>
						  </Link>
						  <Link to={'/'}>
							<i className="iconfont icon-logout btn-logout" onClick={this.props.actions.logout}></i>
						  </Link>
					  </div>
					: <Link to='/login' style={{'textAlign': 'center'}}>
						<i className='iconfont icon-peoplefill btn-login'></i>
						<span>未登录</span>
					  </Link>

		return (
			<ul className={`sideBar ${this.props.sideBar ? 'show' : ''}`}>
				<li className="login-status" onClick={this.props.actions.hideSideBar}>
					{loginLink}
				</li>
				{li}
			</ul>
		)
	}
}

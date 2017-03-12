
import React from 'react'
import { NAV_ITEM } from '../../config'
import './header.less'

function getTitle(type) {

	let obj = NAV_ITEM.filter(item => item.key === type)
	let title = ''
	switch (type) {
		case 'topic':
			title = '主题'
			break
		case 'login':
			title = '登录'
			break
		case 'user':
			title = '用户信息'
			break
		default:
			title = obj.length ? obj[0].name : '全部'
			break
	}

	return title;
}

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.clickHandle = this.clickHandle.bind(this)
	}

	clickHandle(e) {
		this.props.sideBar ? this.props.hideSideBar() : this.props.showSideBar()
		e.stopPropagation();
	}

	render() {
		return (
			<div ref='header' className="header">
				<div className="btn-burger" onClick={this.clickHandle}>
          <svg viewBox="0 0 800 600"  className={`${this.props.sideBar ? 'cross' : ''}`}>
            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
            <path d="M300,320 L540,320" id="middle"></path>
            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
          </svg>
        </div>
        <h2 className="title">{getTitle(this.props.type)}</h2>
			</div>
		)
	}
}


import React, { Component } from 'react'
import './toTop.less'

export default class ToTop extends Component {
	constructor(props) {
		super(props)
		this.timer = null
		this.isShow = false
		this.showToTop = this.showToTop.bind(this)
		this.moveToTop = this.moveToTop.bind(this)
	}

	componentDidMount() {
		document.addEventListener('scroll', this.showToTop, false)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.showToTop, false)
	}

	showToTop() {
		let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
		if (scrollTop >= 200) {
			if (this.isShow) return
			this.refs.toTop.classList.add('show')
			this.isShow = true
		}
		else {
			if (!this.isShow) return
			this.refs.toTop.classList.remove('show')
			this.isShow = false
		}
	}

	moveToTop() {
		let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
		scrollTop = scrollTop / 1.1

		document.body.scrollTop
 		? document.body.scrollTop = scrollTop
 		: document.documentElement.scrollTop = scrollTop

 		if (scrollTop < 1) {
 			cancelAnimationFrame(this.timer)
 			this.timer = null
 			return
 		}

 		this.timer = requestAnimationFrame(this.moveToTop)
	}


	render() {
		return (
			<div className="to-top" ref="toTop" onClick={this.moveToTop}>
				<i className="iconfont icon-top"></i>
			</div>
		)
	}
}
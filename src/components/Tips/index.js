import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Tip from "./tip"
import './tips.less'

let tipsInstance
let key = 1

class Tips extends Component {
	constructor(props) {
		super(props)
		this.state = {tips: []}
		this.add = this.add.bind(this)
		this.remove = this.remove.bind(this)
	}

	add(tip) {
		this.setState(prevState => {
			return { tips: prevState.tips.concat(tip)}
		})
	}

	remove(index) {
		this.setState(prevState => {
			let tips = prevState.tips.filter(tip => tip.index !== index)
			return {tips: tips}
		})
	}

	render() {
		return (
			<ul>
				{this.state.tips.map(tip => 
					<Tip key={tip.index} {...tip} remove={this.remove} />
				)}
			</ul>
		)
	}
}

function newInstanceTips (props) {
	const div = document.createElement('div')
	document.body.appendChild(div)
	return render(<Tips {...props} ele={div} />, div)
}

function getTipsInstance (props) {
	return tipsInstance = tipsInstance || newInstanceTips(props)
}

function notice(content, duration, callback) {
	let props = {
		index: key++,
		type: 'info',
		content: content || '',
		duration: typeof duration === 'undefined' ? 3 : duration,
		callback: callback || null
	}
	let instance = getTipsInstance(props)
	instance.add(props)
	return () => {
		instance.remove(props.index)
	}
}

export default {
	info(content, duration, callback) {
		return notice(content, duration, callback)
	}
}
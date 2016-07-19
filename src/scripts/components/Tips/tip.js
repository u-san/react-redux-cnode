import React, { Component } from 'react'

const vendorPrefix = (function(){
	let body = document.body || document.documentElement,
		style = body.style,
		transition = 'transition',
		vendor = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
		i = 0;

	transition = transition.charAt(0).toUpperCase() + transition.substr(1); 
  
	while (i < vendor.length) {
		if (typeof style[vendor[i] + transition] === 'string') {
		  return vendor[i];
		}
		i++;
	}
	return false;
})();

const animationEnd = (() => {
	if(vendorPrefix === 'Webkit'){
		return 'webkitAnimationEnd';
	}else{
		return 'animationend';
	}
})();

export default class Tip extends Component {
	constructor(props) {
		super(props)
		this.state = {remove: false}
	}

	componentDidMount() {
		if (!this.props.duration) return

		this.timer = setTimeout(() => {
			this.setState({remove: true})
			
			this.refs.tip.addEventListener(animationEnd, () => {
				if (this.props.callback) {
					this.props.callback()
				}
				this.props.remove(this.props.index)
			}, false)
		}, this.props.duration * 1000)
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer)
			this.timer = null
		}
	}

	render() {
		return (
			<li className="tips-wrap">
				<div className={`tips-con ${this.state.remove ? 'fadeOutUp' : 'fadeInDown'}`} ref='tip'>
					{this.props.content}
				</div>
			</li>
		)
	}
}
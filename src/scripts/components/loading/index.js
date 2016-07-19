
import React from 'react'
import './loading.less'

export default class Loading extends React.Component {
	render () {
		return (
			<div className="loading-wrap">
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
			</div>
		)
	}
}
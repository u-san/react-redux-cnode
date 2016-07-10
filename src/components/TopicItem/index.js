import React, { Component } from 'react'
import { Link } from 'react-router'
import { TAGS } from '../../config'
import utils from '../../libs/utils'

export default class TopicItem extends Component {
	render() {
		let topic = this.props.topic
		let tagOpt = utils.getTagOpt(topic, TAGS)
		let creatAt = utils.formatTime(topic.create_at)
		let lastReplayAt = utils.formatTime(topic.last_reply_at)
		return (
			<li>
				<div className="flex flex-middle">
					<div className="flex-shrink topic-tag">
						{typeof tagOpt === 'undefined' ? '' : <div className={`tag ${tagOpt.color}`}>{tagOpt.name}</div>}
					</div>
					<h3 title={topic.title}><Link to={`/topic/${topic.id}`}>{topic.title}</Link></h3>
				</div>
				<div className="topic-con flex">
					<Link className="flex-shrink" to={`/user/${topic.author.loginname}`}>
						<img className="avatar" src={topic.author.avatar_url} />
					</Link>
					<div className="topic-info">
						<div className="flex flex-between">
							<div>
								<span>{topic.author.loginname}</span>
							</div>
							<div>
								<b>{topic.reply_count}</b>
								<span> / </span>
								<span>{topic.visit_count}</span>
							</div>
						</div>
						<div  className="flex flex-between">
							<time className="time-data">{creatAt}</time>
							<time className="time-data">{lastReplayAt}</time>
						</div>
					</div>
				</div>
			</li>
		)
	}
}
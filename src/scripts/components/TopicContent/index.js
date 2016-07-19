import React, { Component } from 'react'
import { Link } from 'react-router'
import TopicComment from '../TopicComment'
import { TAGS } from '../../config'
import utils from '../../libs/utils'
import prettyPrint from '../../libs/prettify'


export default class TopicContent extends Component {
	componentDidMount() {
		document.querySelectorAll('pre').forEach((item) => {
			item.classList.add('linenums')
		})
		prettyPrint();
	}

	render() {
		let topic = this.props
		let tagOpt = utils.getTagOpt(topic, TAGS)
		let creatAt = utils.formatTime(topic.create_at)
		return (
			<section className="topic-detail">
				<h2 className="topic-title">{topic.title}</h2>
				<div className="topic-con flex">
					<Link to={`/user/${topic.author.loginname}`} className="flex-shrink">
						<img className="avatar" src={topic.author ? topic.author.avatar_url : ''} />
					</Link>
					<div className="topic-info flex flex-between">
						<div className="topic-info-l">
							<div>{topic.author ? topic.author.loginname : ''}</div>
							<time className="time-data">{creatAt}</time>
						</div>
						<div className="topic-info-r">
							<div className="topic-tag">
								{typeof tagOpt === 'undefined' ? '' : <div className={`tag ${tagOpt.color}`}>{tagOpt.name}</div>}
							</div>
							<span className="time-data">{`${topic.visit_count}次浏览`}</span>
						</div>
					</div>
				</div>
				<div ref="markdownBody" className="markdown-body" dangerouslySetInnerHTML={{__html: topic.content}}></div>
				<TopicComment replies={topic.replies} user={this.props.user} />
			</section>
		)
	}
}
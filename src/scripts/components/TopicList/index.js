
import React, { Component } from 'react'
import TopicItem from '../TopicItem'
import './topicList.less'

export default class TopicsList extends Component {
 	render() {
 		return (
 			<section className="topic-list" ref="topicList">
				<ul>
					{ this.props.data.map((topic, index) =>
						<TopicItem key={index} topic={topic} />
					)}
				</ul>
			</section>
 		)
 	}
}

import React, { Component } from 'react'
import TopicItem from '../TopicItem'

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
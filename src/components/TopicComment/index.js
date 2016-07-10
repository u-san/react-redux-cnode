import React, { Component } from 'react'
import { Link } from 'react-router'
import utils from '../../libs/utils'
import './topicComment.less'

export default class TopicComment extends Component {
	render() {
		return (
			<dl className="topic-comment">
				<dt>
					<h2><strong>{this.props.replies.length}</strong> 回复</h2>
				</dt>
				{
					this.props.replies.map( (reply, index) => {
						let creatAt = utils.formatTime(reply.create_at)
						return (
							<dd key={index} className="reply-wrap">
								<div className="flex">
									<Link to={`/user/${reply.author.loginname}`} className="flex-shrink">
										<img className="avatar" src={reply.author.avatar_url} />
									</Link>
									<div className="reply-info flex flex-between">
										<div>
											<p className="reply-user">{reply.author.loginname}</p>
											<p>{creatAt}</p>
										</div>
										{
											this.props.user.login
											? <div>
													<label className="btn-like" onClick={() => {console.log(1)}}>
														<i className="iconfont icon-appreciatefill"></i>
														<span>{reply.ups.length}</span>
													</label>
													<label className="btn-share" onClick={() => {console.log(1)}}>
														<i className="iconfont icon-reply"></i>
													</label>
												</div>
											: <div>
													<Link className="btn-like"  to='/login'>
														<i className="iconfont icon-appreciatefill"></i>
														<span>{reply.ups.length}</span>
													</Link>
													<Link className="btn-share" to='/login'>
														<i className="iconfont icon-reply"></i>
													</Link>
												</div>
										}
									</div>
								</div>
								<div className="reply-con markdown-body" dangerouslySetInnerHTML={{__html: reply.content}}></div>
							</dd>
						)
					})
				}
			</dl>
		)
	}
}